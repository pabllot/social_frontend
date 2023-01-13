import { Container, Content, ContentImg, DateSpan, Details, Image, Info, Item, NameSpan, SubContainer, User, UserInfo } from "./styles";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { Link } from "react-router-dom";
import Comments from "../comments/Comments";
import { useState, useContext } from "react";
import moment from 'moment';
import { useQuery, useQueryClient, useMutation } from 'react-query'
import { makeRequest } from "../../axios";
import { AuthContext } from "../../context/authContext";


const Post = ({ post }) => {
  const [commentOpen, setCommentOpen] = useState(false);
  const { currentUser } = useContext(AuthContext);

  const { isLoading, data } = useQuery(["likes", post.id], () =>
  makeRequest.get("/likes?postId="+ post.id).then((res) => {
    return res.data;
  })
  );
  const queryClient = useQueryClient();
  
  const mutation = useMutation((liked) => {
    if(liked) return makeRequest.delete("/likes?postId="+ post.id);
    return makeRequest.post("/likes", {postId: post.id});
  }, {
    onSuccess: ()=>{
      //Invalid and refetch
      queryClient.invalidateQueries(["likes"])
    }
  });

  const deleteMutation = useMutation(
    (postId) => {
      return makeRequest.delete("/posts/" + postId);
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
            <Image src={"/upload/"+post?.profilePic} alt="" />
            <Details>
              <Link
                to={`/profile/${post?.userId}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <NameSpan>{post?.name}</NameSpan>
              </Link>
              <DateSpan>{moment(post?.createdAt).fromNow()}</DateSpan>
            </Details>
          </UserInfo>
        </User>
        <Content>
          <p>{post.desc}</p>
          <ContentImg src={"./upload/"+ post?.img} alt="" />
        </Content>
        <Info>
          <Item>
            {isLoading ? "loading.." :  data.includes(currentUser?.id) ? <FavoriteOutlinedIcon style={{color: "red"}} onClick={handleLike} /> : <FavoriteBorderOutlinedIcon onClick={handleLike} />}
            {data?.length} Likes
          </Item>
          <Item onClick={() => setCommentOpen(!commentOpen)}>
            <TextsmsOutlinedIcon />
            Comments
          </Item>
          {post?.userId === currentUser?.id && 
          <Item onClick={handleDelete}>
            <DeleteOutlineIcon />
            Delete
          </Item>}
        </Info>
        {commentOpen && <Comments postId={post?.id} />}
      </SubContainer>
    </Container>
  );
};

export default Post;
