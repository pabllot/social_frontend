import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import { Button, Container, Filtered, Image, Input, Left, Right, Search, SearchModal, Span, User, UserSpan, searchModal } from "./styles";
import { MdOutlineLogout } from "react-icons/md";
import { makeRequest } from "../../axios";
import { useQuery } from "react-query";
import { useState } from "react";
import { useEffect } from "react";

const Navbar = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [search, setSearch] = useState("");
  const [filtered, setFiltered] = useState([""]);
  const { currentUser, logout } = useContext(AuthContext);

  const { isLoading, data } = useQuery(["users"], () =>
    makeRequest.get("/users").then((res) => {
      return res.data;
    })
  );

  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };

  useEffect(() => {
    setFiltered(data?.filter((user) => user.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())));
  }, [search]);

  useEffect(() => {
    if (pathname !== "/") setSearch("");
  }, [pathname]);

  return (
    <Container>
      <Left>
        <Link to="/" style={{ textDecoration: "none" }}>
          <Span>pablotsocialmedia</Span>
        </Link>
        {pathname === "/" && (
          <Search>
            <SearchOutlinedIcon />
            <Input type="text" placeholder="Search people..." value={search} onChange={(e) => setSearch(e.target.value)} />
          </Search>
        )}
      </Left>
      <Right>
        <Link to={`/profile/${currentUser?.id} `} style={{ textDecoration: "none", color: "inherit" }}>
          <User>
            <Image src={`/upload/${currentUser?.profilePic}`} alt="" />
            <UserSpan>{currentUser?.name}</UserSpan>
          </User>
        </Link>
        <Button onClick={handleLogout}>
          <MdOutlineLogout />
        </Button>
      </Right>
      {search.length && pathname === "/" ? (
        <SearchModal>
          {filtered?.map((e, idx) => (
            <Link key={idx} to={`/profile/${e.id} `} style={{ textDecoration: "none" }}>
              <Filtered style={{ display: "flex" }}>
                <div>{e.name}</div>
                <Image src={`/upload/${e.profilePic}`} />
              </Filtered>
            </Link>
          ))}
        </SearchModal>
      ) : (
        ""
      )}
    </Container>
  );
};

export default Navbar;
