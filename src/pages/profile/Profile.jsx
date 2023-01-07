import "./profile.scss";
import PlaceIcon from "@mui/icons-material/Place";
import LanguageIcon from "@mui/icons-material/Language";
import Posts from "../../components/posts/Posts";
import { useQuery, useQueryClient, useMutation } from 'react-query'
import { makeRequest } from "../../axios";
import { useLocation } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import { useContext, useState } from "react";
import Update from "../../components/update/Update";

const Profile = () => {
  const [openUpdate, setOpenUpdate] = useState(false)
  const { currentUser } = useContext(AuthContext)

  const userId = parseInt(useLocation().pathname.split("/")[2])
  console.log(userId)

  const { isLoading, error, data: userData } = useQuery(["user"], () =>
  makeRequest.get("/users/find/"+ userId).then((res) => {
    return res.data;
  })
  );


  
  const { isLoading: rIsLoading,  data: relationshipData } = useQuery(["relationship"], () =>
  makeRequest.get("/relationships?followedUserId="+ userId).then((res) => {
    return res.data;
  })
  );

  const queryClient = useQueryClient();
  
  const mutation = useMutation((following) => {
    if(following) return makeRequest.delete("/relationships?userId="+ userId);
    return makeRequest.post("/relationships", {userId});
  }, {
    onSuccess: ()=>{
      //Invalid and refetch
      queryClient.invalidateQueries(["relationship"])
    }
  })


  const handleFollow = () => {
    mutation.mutate(relationshipData.includes(currentUser.id))
  }


  return (
    <div className="profile">
      {isLoading ? "loading..." : <>
      <div className="images">
        <img
          src={"/upload/"+userData.coverPic}
          alt=""
          className="cover"
        />
        <img
          src={"/upload/"+userData.profilePic}
          alt=""
          className="profilePic"
        />
      </div>
      <div className="profileContainer">
        <div className="uInfo">
    
          <div className="center">
            <span>{userData?.name}</span>
            <div className="info">
              <div className="item">
                <PlaceIcon />
                <span>{userData?.city}</span>
              </div>
              <div className="item">
                <LanguageIcon />
                <span>{userData?.website}</span>
              </div>
            </div>
            {rIsLoading ? "Loading" :  userId === currentUser.id ? <button onClick={()=>setOpenUpdate(true)}>update</button> :
             <button onClick={handleFollow}>{relationshipData.includes(currentUser.id) ? "Following" : "Follow"}</button>}
          </div>
        
        </div>
      <Posts userId={userId}/>
      </div>
      </>}
      {openUpdate && <Update setOpenUpdate={setOpenUpdate} user={userData} />}
    </div>
  );
};

export default Profile;
