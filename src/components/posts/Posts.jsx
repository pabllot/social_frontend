import Post from "../post/Post";
import "./posts.scss";
import { useQuery } from 'react-query'
import { makeRequest } from "../../axios";
import { v4 as uuidv4 } from 'uuid';

const Posts = ({userId}) => {
  const { isLoading, error, data } = useQuery('post', () =>
    makeRequest.get("/posts?userId="+ userId).then((res) => {
      return res.data;
    })
   )


   return (
    <div className="posts">
      {error
        ? "Something went wrong!"
        : isLoading
        ? "loading"
        : data.map((post) => <Post post={post} key={uuidv4()}/>)}
    </div>
  );
};
export default Posts;
