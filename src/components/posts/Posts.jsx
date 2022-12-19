import Post from "../post/Post";
import "./posts.scss";
import { useQuery } from 'react-query'
import { makeRequest } from "../../axios";


const Posts = () => {
  const { isLoading, error, data } = useQuery('post', () =>
    makeRequest.get("/posts").then((res) => {
      return res.data;
    })
   )


  return <div className="posts">
    {error
     ? "Something went wrong!" 
     : isLoading ? "Loading..." 
     : data.map(post=> <Post post={post} key={post.id}/>
        )}
      
  </div>;
};

export default Posts;
