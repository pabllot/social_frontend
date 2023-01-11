import "./post.scss";
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
    <div className="post">
      <div className="container">
        <div className="user">
          <div className="userInfo">
            <img src={"/upload/"+post.profilePic} alt="" />
            <div className="details">
              <Link
                to={`/profile/${post.userId}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <span className="name">{post.name}</span>
              </Link>
              <span className="date">{moment(post.createdAt).fromNow()}</span>
            </div>
          </div>
        </div>
        <div className="content">
          <p>{post.desc}</p>
          <img src={"./upload/"+ post.img} alt="" />
        </div>
        <div className="info">
          <div className="item">
            {isLoading ? "loading.." :  data.includes(currentUser.id) ? <FavoriteOutlinedIcon style={{color: "red"}} onClick={handleLike} /> : <FavoriteBorderOutlinedIcon onClick={handleLike} />}
            {data?.length} Likes
          </div>
          <div className="item" onClick={() => setCommentOpen(!commentOpen)}>
            <TextsmsOutlinedIcon />
            Comments
          </div>
          {post.userId === currentUser.id && 
          <div className="item" onClick={handleDelete}>
            <DeleteOutlineIcon />
            Delete
          </div>}
        </div>
        {commentOpen && <Comments postId={post.id} />}
      </div>
    </div>
  );
};

export default Post;
