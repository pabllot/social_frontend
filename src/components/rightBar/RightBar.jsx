import { useQuery } from 'react-query'
import { Link } from 'react-router-dom';
import { makeRequest } from '../../axios';
import { useLocation } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';

import "./rightBar.scss";

const RightBar = () => {

  const { isLoading, error, data } = useQuery(["users"], () =>
  makeRequest.get("/users").then((res) => {
    return res.data;
  })
  );

  const location = useLocation().pathname.includes('profile')

  return (
    <div className="rightBar">
      <div className="container">
        <div className="item">
          <span>Suggestions For You</span>

          {isLoading ? "loading..." : !location ? data.map((user) => {
            return (

              <Link key={uuidv4()} to={`/profile/${user.id}`} style={{textDecoration: "none"}}>
              <div  className="user">
                 <div className="userInfo">
                   <img
                     src={"/upload/"+user.profilePic}
                     alt=""
                     />
                   <span>{user.username}</span>
                 </div>
                 <div className="buttons">
                   <button>view profile</button>
                 </div>
               </div>
            </Link>
         ) }) : ''}
          
     

        </div>
      </div>
    </div>
  );
};

export default RightBar;
