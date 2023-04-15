import { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation, useQueryClient } from "react-query";

import {
  Bottom,
  BottomImg,
  BottomLeft,
  BottomRight,
  Button,
  Container,
  File,
  Hr,
  ImageLeft,
  Input,
  Item,
  Left,
  Right,
  Span,
  SubContainer,
  Top,
} from "./styles";
import Image from "../../assets/img.png";
import { api } from "../../services/api";
import { useAuth } from "../../hooks/useAuth";

const Share = () => {
  const { currentUser } = useAuth();
  const queryClient = useQueryClient();
  const [file, setFile] = useState(null);
  const [desc, setDesc] = useState("");

  const upload = async () => {
    try {
      const formData = new FormData();
      formData.append("file", file);
      const res = await api.post("/upload", formData);
      return res.data;
    } catch (err) {
      console.log(err);
    }
  };

  const mutation = useMutation(
    (newPost) => {
      return api.post("/posts", newPost);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["posts"]);
      },
    }
  );

  const handleClick = async (e) => {
    e.preventDefault();
    let imgUrl = "";
    if (file) imgUrl = await upload();
    mutation.mutate({ desc, img: imgUrl });
    setDesc("");
    setFile(null);
    window.location.reload(false); //TEMPORARY SOLUTION
  };

  return (
    <Container>
      <SubContainer>
        <Top>
          <Left>
            <Link to={`/profile/${currentUser?.id} `} style={{ textDecoration: "none", color: "inherit", cursor: "pointer" }}>
              <ImageLeft src={`/upload/${currentUser?.profilePic}`} alt="" />
            </Link>
            <Input type="text" placeholder={`What's on your mind?`} onChange={(e) => setDesc(e.target.value)} value={desc} />
          </Left>
          <Right>{file && <File alt="" src={URL.createObjectURL(file)} />}</Right>
        </Top>
        <Hr />
        <Bottom>
          <BottomLeft>
            <Input type="file" id="file" style={{ display: "none" }} onChange={(e) => setFile(e.target.files[0])} />
            <label htmlFor="file">
              <Item>
                <BottomImg src={Image} alt="" />
                <Span>Add Image</Span>
              </Item>
            </label>
          </BottomLeft>
          <BottomRight>
            <Button onClick={handleClick}>Share</Button>
          </BottomRight>
        </Bottom>
      </SubContainer>
    </Container>
  );
};

export default Share;
