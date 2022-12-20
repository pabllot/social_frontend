import "./profile.scss";
import PlaceIcon from "@mui/icons-material/Place";
import LanguageIcon from "@mui/icons-material/Language";
import Posts from "../../components/posts/Posts";
import { useQuery, useQueryClient, useMutation } from 'react-query'
import { makeRequest } from "../../axios";
import { useLocation } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import { useContext } from "react";

const Profile = () => {

  const { currentUser } = useContext(AuthContext)

  const userId = parseInt(useLocation().pathname.split("/")[2])

  const { isLoading, error, data } = useQuery(["user"], () =>
  makeRequest.get("/users/find/"+ userId).then((res) => {
    return res.data;
  })
  );

  const { isLoading: rIsLoading,  data: relationshipData } = useQuery(["relationship"], () =>
  makeRequest.get("/relationships?followedUserId="+ userId).then((res) => {
    return res.data;
  })
  );

  console.log(relationshipData)

  const handleFollow = () => {

  }

  return (
    <div className="profile">
      {isLoading ? "loading..." : <>
      <div className="images">
        <img
          src={data?.coverPic}
          alt=""
          className="cover"
        />
        <img
          src={data?.profilePic}
          alt=""
          className="profilePic"
        />
      </div>
      <div className="profileContainer">
        <div className="uInfo">
          
          <div className="center">
            <span>{data?.name}</span>
            <div className="info">
              <div className="item">
                <PlaceIcon />
                <span>{data?.city}</span>
              </div>
              <div className="item">
                <LanguageIcon />
                <span>{data?.website}</span>
              </div>
            </div>
            {rIsLoading ? "Loading" :  userId === currentUser.id ? <button>Upgrade</button> :
             <button onClick={handleFollow}>{relationshipData.includes(currentUser.id) ? "Following" : "Follow"}</button>}
          </div>
        
        </div>
      <Posts/>
      </div>
      </>}
    </div>
  );
};

export default Profile;
