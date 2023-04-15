import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useQuery, useQueryClient, useMutation } from "react-query";
import PlaceIcon from "@mui/icons-material/Place";
import InstagramIcon from "@mui/icons-material/Instagram";

import {
  Button,
  ButtonsContainer,
  Center,
  CenterSpan,
  Container,
  Cover,
  ImagesContainer,
  Info,
  InfoSpan,
  Item,
  ProfileContainer,
  ProfilePic,
  UserInfo,
} from "./styles";
import Update from "../../components/update";
import Posts from "../../components/posts";
import { api } from "../../services/api";
import { useAuth } from "../../hooks/useAuth";

const Profile = () => {
  const [openUpdate, setOpenUpdate] = useState(false);
  const { currentUser } = useAuth();

  const userId = parseInt(useLocation().pathname.split("/")[2]);

  const { isLoading, data: userData } = useQuery(["user"], () =>
    api.get("/users/find/" + userId).then((res) => {
      return res.data;
    })
  );
  const { isLoading: rIsLoading, data: relationshipData } = useQuery(["relationship"], () =>
    api.get("/relationships?followedUserId=" + userId).then((res) => {
      return res.data;
    })
  );

  const queryClient = useQueryClient();

  const mutation = useMutation(
    (following) => {
      if (following) return api.delete("/relationships?userId=" + userId);
      return api.post("/relationships", { userId });
    },
    {
      onSuccess: () => {
        //Invalid and refetch
        queryClient.invalidateQueries(["relationship"]);
      },
    }
  );

  const handleFollow = () => {
    mutation.mutate(relationshipData.includes(currentUser.id));
  };

  const deleteUser = () => {
    api.delete(`/users/${userId}`);
  };

  return (
    <Container>
      {isLoading ? (
        "loading..."
      ) : (
        <>
          <ImagesContainer>
            <Cover src={"/upload/" + userData.coverPic} alt="" />
            <ProfilePic src={"/upload/" + userData.profilePic} alt="" />
          </ImagesContainer>
          <ProfileContainer>
            <UserInfo>
              <Center>
                <CenterSpan>{userData?.name}</CenterSpan>
                <Info>
                  <Item>
                    <PlaceIcon />
                    <InfoSpan>{userData?.city}</InfoSpan>
                  </Item>
                  <Item>
                    <InstagramIcon />
                    <InfoSpan>{userData?.website}</InfoSpan>
                  </Item>
                </Info>
                <ButtonsContainer>
                  {rIsLoading ? "Loading" : <Button onClick={handleFollow}>{relationshipData.includes(currentUser.id) ? "Following" : "Follow"}</Button>}
                  {rIsLoading ? "Loading" : userId === currentUser.id && <Button onClick={() => setOpenUpdate(true)}>update</Button>}
                </ButtonsContainer>
              </Center>
            </UserInfo>
            <Posts userId={userId} />
          </ProfileContainer>
        </>
      )}
      {openUpdate && <Update setOpenUpdate={setOpenUpdate} user={userData} />}
      {currentUser.id === 2 && <Button onClick={deleteUser}>Delete user</Button>}
    </Container>
  );
};

export default Profile;
