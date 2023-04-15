import { useContext, useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";

import { Button, Close, Container, Files, Form, H1, Image, ImageContainer, Input, Label, Span, Wrapper } from "./styles";
import { makeRequest } from "../../axios";
import { AuthContext } from "../../context/authContext";

const Update = ({ setOpenUpdate, user }) => {
  const navigate = useNavigate();
  const { logout, currentUser } = useContext(AuthContext);
  const queryClient = useQueryClient();
  const [cover, setCover] = useState(null);
  const [profile, setProfile] = useState(null);
  const [texts, setTexts] = useState({
    name: currentUser.name,
    city: currentUser.city,
    website: currentUser.website,
  });

  const upload = async (file) => {
    try {
      const formData = new FormData();
      formData.append("file", file);
      const res = await makeRequest.post("/upload", formData);
      return res.data;
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (e) => {
    setTexts((prev) => ({ ...prev, [e.target.name]: [e.target.value] }));
  };

  const mutation = useMutation(
    (user) => {
      return makeRequest.put("/users", user);
    },
    {
      onSuccess: () => {
        //Invalid and refetch
        queryClient.invalidateQueries(["user"]);
      },
    }
  );

  const handleSubmit = async (e) => {
    e.preventDefault();

    let coverUrl;
    let profileUrl;
    coverUrl = cover ? await upload(cover) : user.coverPic;
    profileUrl = profile ? await upload(profile) : user.profilePic;

    mutation.mutate({ ...texts, coverPic: coverUrl, profilePic: profileUrl });
    setOpenUpdate(false);
    setCover(null);
    setProfile(null);
    await logout();
    navigate("/login");
    alert("Faça login novamente para salvar todas as modificações!!!");
  };

  return (
    <Container>
      <Wrapper>
        <H1>Update Your Profile</H1>
        <Form>
          <Files>
            <Label htmlFor="cover">
              <Span>Cover Picture</Span>
              <ImageContainer>
                <Image src={cover ? URL.createObjectURL(cover) : "/upload/" + user.coverPic} alt="" />
              </ImageContainer>
            </Label>
            <Input type="file" id="cover" style={{ display: "none" }} onChange={(e) => setCover(e.target.files[0])} />
            <Label htmlFor="profile">
              <Span>Profile Picture</Span>
              <ImageContainer>
                <Image src={profile ? URL.createObjectURL(profile) : "/upload/" + user.profilePic} alt="" />
              </ImageContainer>
            </Label>
            <Input type="file" id="profile" style={{ display: "none" }} onChange={(e) => setProfile(e.target.files[0])} />
          </Files>

          <Label>Name</Label>
          <Input type="text" autoComplete="off" value={texts.name} name="name" onChange={handleChange} />
          <Label>Country / City</Label>
          <Input type="text" name="city" value={texts.city} onChange={handleChange} autoComplete="off" />
          <Label>Instagram</Label>
          <Input type="text" name="website" value={texts.website} onChange={handleChange} autoComplete="off" />
          <Button onClick={handleSubmit}>Update</Button>
        </Form>
        <Close onClick={() => setOpenUpdate(false)}>close</Close>
      </Wrapper>
    </Container>
  );
};

export default Update;
