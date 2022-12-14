import Post from "../post/Post";
import "./posts.scss";
import { useQuery } from 'react-query'


const Posts = () => {

  const { isLoading, error, data } = useQuery('post', () =>
  
   )

  return <div className="posts">
    {posts.map(post=>(
      <Post post={post} key={post.id}/>
    ))}
  </div>;
};

export default Posts;
