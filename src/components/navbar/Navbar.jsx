import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import { Button, Container, Image, Input, Left, Right, Search, Span, User, UserSpan } from "./styles";

const Navbar = () => {
  const navigate = useNavigate();
  const { currentUser, logout } = useContext(AuthContext);

  const handleLogout = async () => {
    await logout()
    navigate("/login")
  }

  return (
    <Container>
      <Left>
        <Button onClick={handleLogout}>logout</Button>
        <Link to="/" style={{ textDecoration: "none" }}>
          <Span>pablotsocialmedia</Span>
        </Link>
        <Search>
          <SearchOutlinedIcon />
          <Input type="text" placeholder="Search..." />
        </Search>
      </Left>
      <Right>
        <Link to={`/profile/${currentUser?.id} `} style={{ textDecoration: "none", color: "inherit" }}>
        <User>
          <Image
            src={`/upload/${currentUser?.profilePic}`}
            alt=""
            />
          <UserSpan>{currentUser?.name}</UserSpan>
        </User>
        </Link>
      </Right>
    </Container>
  );
};

export default Navbar;
