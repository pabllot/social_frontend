import Image from "../../assets/img.png";
import { useContext, useState} from "react";
import { AuthContext } from "../../context/authContext";
import { useMutation, useQueryClient } from 'react-query'
import { makeRequest } from "../../axios";
import { Link } from "react-router-dom";
import { Bottom, BottomImg, BottomLeft, BottomRight, Button, Container, File, Hr, ImageLeft, Input, Item, Left, Right, Span, SubContainer, Top } from "./styles";

const Share = () => {
  const {currentUser} = useContext(AuthContext);
  const queryClient = useQueryClient();
  const [file, setFile] = useState(null);
  const [desc, setDesc] = useState("");

  const upload = async () => {
    try {
      const formData = new FormData();
      formData.append("file", file);
      const res = await makeRequest.post("/upload", formData);
      return res.data;
    } catch (err) {
      console.log(err)
    }
  }

  const mutation = useMutation((newPost) => {
    return makeRequest.post("/posts", newPost)
  }, {
    onSuccess: ()=>{
      //Invalid and refetch
      queryClient.invalidateQueries(["posts"])
    }
  })

  const handleClick = async (e) => {
    e.preventDefault();
    let imgUrl = "";
    if(file) imgUrl = await upload();
    mutation.mutate({desc, img: imgUrl });
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
            <ImageLeft
              src={`/upload/${currentUser?.profilePic}`}
              alt=""
              />
              </Link>
            <Input 
            type="text" 
              placeholder={`What's on your mind ${currentUser?.name}?`}
            onChange={(e)=>setDesc(e.target.value)}
            value={desc}
            />
          </Left>
          <Right>
            {file && <File alt='' src={URL.createObjectURL(file)}/>}
          </Right>
        </Top>
        <Hr />
        <Bottom>
          <BottomLeft>
            <Input type="file" id="file" style={{display:"none"}} onChange={(e)=>setFile(e.target.files[0])} />
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
