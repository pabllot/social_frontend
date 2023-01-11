import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";
import { AuthContext } from "../../context/authContext";
import { Button, Container, Image, Input, Left, Right, Search, Span, User } from "./styles";

const Navbar = () => {
  const navigate = useNavigate();
  const { toggle, darkMode } = useContext(DarkModeContext);
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
        {darkMode ? (
          <WbSunnyOutlinedIcon style={{color: 'yellow'}} onClick={toggle} />
        ) : (
          <DarkModeOutlinedIcon onClick={toggle} />
        )}
        <Search>
          <SearchOutlinedIcon />
          <Input type="text" placeholder="Search..." />
        </Search>
      </Left>
      <Right>
        <Link to={`/profile/${currentUser.id} `} style={{ textDecoration: "none", color: "inherit" }}>
        <User>
          <Image
            src={`/upload/${currentUser.profilePic}`}
            alt=""
            />
          <span>{currentUser.name}</span>
        </User>
        </Link>
      </Right>
    </Container>
  );
};

export default Navbar;
