import "./navbar.scss";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";
import { AuthContext } from "../../context/authContext";

const Navbar = () => {
  const navigate = useNavigate();
  const { toggle, darkMode } = useContext(DarkModeContext);
  const { currentUser, logout } = useContext(AuthContext);

  const handleLogout = async () => {
    await logout()
    navigate("/login")
  }

  return (
    <div className="navbar">
      <div className="left">
        <button onClick={handleLogout}>logout</button>
        <Link to="/" style={{ textDecoration: "none" }}>
          <span>pablotsocialmedia</span>
        </Link>
        {darkMode ? (
          <WbSunnyOutlinedIcon style={{color: 'yellow'}} onClick={toggle} />
        ) : (
          <DarkModeOutlinedIcon onClick={toggle} />
        )}
        <div className="search">
          <SearchOutlinedIcon />
          <input type="text" placeholder="Search..." />
        </div>
      </div>
      <div className="right">
        <Link to={`/profile/${currentUser.id} `} style={{ textDecoration: "none", color: "inherit" }}>
        {currentUser.profilePic === null ? <div>clique aqui para adicionar sua foto de perfil</div> : ''}  
        <div className="user">
          <img
            src={`/upload/${currentUser.profilePic}`}
            alt=""
            />
          <span>{currentUser.name}</span>
        </div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
