import Post from "../post/Post";
import { useQuery } from 'react-query'
import { makeRequest } from "../../axios";
import { v4 as uuidv4 } from 'uuid';
import { Container } from "./styles";

const Posts = ({userId}) => {
  const { isLoading, error, data } = useQuery('post', () =>
    makeRequest.get("/posts?userId="+ userId).then((res) => {
      return res.data;
    })
   )


   return (
    <Container>
      {error
        ? "Something went wrong!"
        : isLoading
        ? "loading"
        : data.map((post) => <Post post={post} key={uuidv4()}/>)}
    </Container>
  );
};
export default Posts;
