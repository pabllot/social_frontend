import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "react-query";
import { Link } from "react-router-dom";
import moment from "moment";

import { Button, Comment, Container, Date, DeleteButton, Image, Info, Input, Write } from "./styles";
import { api } from "../../services/api";
import { useAuth } from "../../hooks/useAuth";

const Comments = ({ postId }) => {
  const [desc, setDesc] = useState("");
  const { currentUser } = useAuth();
  const queryClient = useQueryClient();

  const { isLoading, data } = useQuery("comments", () =>
    api.get("/comments?postId=" + postId).then((res) => {
      return res.data;
    })
  );

  const mutation = useMutation(
    (newComment) => {
      return api.post("/comments", newComment);
    },
    {
      onSuccess: () => {
        //Invalid and refetch
        queryClient.invalidateQueries(["comments"]);
      },
    }
  );
  const handleClick = async (e) => {
    e.preventDefault();
    mutation.mutate({ desc, postId });
    setDesc("");
  };

  const deleteMutation = useMutation(
    (commentId) => {
      return api.delete("/comments/" + commentId);
    },
    {
      onSuccess: () => {
        // Invalidate and refetch
        queryClient.invalidateQueries(["comments"]);
      },
    }
  );

  const handleDelete = (comment) => {
    deleteMutation.mutate(comment);
  };

  return (
    <Container>
      <Write>
        <Image src={"/upload/" + currentUser.profilePic} alt="" />
        <Input type="text" placeholder="write a comment" value={desc} onChange={(e) => setDesc(e.target.value)} />
        <Button onClick={handleClick}>Send</Button>
      </Write>
      {isLoading
        ? "Loading"
        : data.map((comment) => (
            <Comment key={comment.id}>
              <Link to={`/profile/${currentUser.id} `} style={{ textDecoration: "none", color: "inherit" }}>
                <Image src={"/upload/" + comment.profilePic} alt="" />
              </Link>
              <Info>
                <p>{comment.desc}</p>
              </Info>
              <Date>{moment(comment.createdAt).fromNow()}</Date>
              <DeleteButton onClick={() => handleDelete(comment.id)}>Delete</DeleteButton>
            </Comment>
          ))}
    </Container>
  );
};

export default Comments;
