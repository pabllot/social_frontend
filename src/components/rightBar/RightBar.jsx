import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

import { Button, ButtonContainer, Container, Image, Item, Span, SubContainer, User, UserInfo, UsernameSpan } from "./styles";
import { makeRequest } from "../../axios";

const RightBar = () => {
  const { isLoading, data } = useQuery(["users"], () =>
    makeRequest.get("/users").then((res) => {
      return res.data;
    })
  );

  const location = useLocation().pathname.includes("profile");

  return (
    <>
      {!location && (
        <Container>
          <SubContainer>
            {/* <Item>
            <Span>All {data?.length} users</Span>

            {isLoading ? "loading..." : !location ? data.map((user) => {
              return (
                <Link key={uuidv4()} to={`/profile/${user.id}`} style={{textDecoration: "none"}}>
                <User>
                  <UserInfo>
                    <Image
                      src={"/upload/"+user.profilePic}
                      alt=""
                      />
                    <UsernameSpan>{user.username}</UsernameSpan>
                  </UserInfo>
                  <ButtonContainer>
                    <Button>view profile</Button>
                  </ButtonContainer>
                </User>
              </Link>
          ) }) : ''}        

          </Item> */}
          </SubContainer>
        </Container>
      )}
    </>
  );
};

export default RightBar;
