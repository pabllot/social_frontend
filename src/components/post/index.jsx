import { useState } from "react";
import { useQuery, useQueryClient, useMutation } from "react-query";
import { Link } from "react-router-dom";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import moment from "moment";

import { Container, Content, ContentImg, DateSpan, Details, Image, Info, Item, NameSpan, SubContainer, User, UserInfo } from "./styles";
import Comments from "../comments";
import { api } from "../../services/api";
import { useAuth } from "../../hooks/useAuth";

const Post = ({ post }) => {
  const [commentOpen, setCommentOpen] = useState(false);
  const { currentUser } = useAuth();

  const { isLoading, data } = useQuery(["likes", post.id], () =>
    api.get("/likes?postId=" + post.id).then((res) => {
      return res.data;
    })
  );
  const queryClient = useQueryClient();

  const mutation = useMutation(
    (liked) => {
      if (liked) return api.delete("/likes?postId=" + post.id);
      return api.post("/likes", { postId: post.id });
    },
    {
      onSuccess: () => {
        //Invalid and refetch
        queryClient.invalidateQueries(["likes"]);
      },
    }
  );

  const deleteMutation = useMutation(
    (postId) => {
      return api.delete("/posts/" + postId);
    },
    {
      onSuccess: () => {
        // Invalidate and refetch
        queryClient.invalidateQueries(["posts"]);
      },
    }
  );

  const handleLike = () => {
    mutation.mutate(data.includes(currentUser.id));
  };

  const handleDelete = () => {
    deleteMutation.mutate(post.id);
    window.location.reload(false); //TEMPORARY SOLUTION
  };

  return (
    <Container>
      <SubContainer>
        <User>
          <UserInfo>
            <Link to={`/profile/${post?.userId}`} style={{ textDecoration: "none", color: "inherit" }}>
              <Image src={"/upload/" + post?.profilePic} alt="" />
            </Link>
            <Details>
              <Link to={`/profile/${post?.userId}`} style={{ textDecoration: "none", color: "inherit" }}>
                <NameSpan>{post?.name}</NameSpan>
              </Link>
              <DateSpan>{moment(post?.createdAt).fromNow()}</DateSpan>
            </Details>
          </UserInfo>
        </User>
        <Content>
          <p>{post.desc}</p>
          <ContentImg src={"./upload/" + post?.img} alt="" />
        </Content>
        <Info>
          <Item>
            {isLoading ? (
              "loading.."
            ) : data.includes(currentUser?.id) ? (
              <FavoriteOutlinedIcon style={{ color: "red" }} onClick={handleLike} />
            ) : (
              <FavoriteBorderOutlinedIcon onClick={handleLike} />
            )}
            {data?.length} Likes
          </Item>
          <Item onClick={() => setCommentOpen(!commentOpen)}>
            <TextsmsOutlinedIcon />
            Comments
          </Item>
          {post?.userId === currentUser?.id && (
            <Item onClick={handleDelete}>
              <DeleteOutlineIcon />
              Delete
            </Item>
          )}
        </Info>
        {commentOpen && <Comments postId={post?.id} />}
      </SubContainer>
    </Container>
  );
};

export default Post;
