import { useEffect } from 'react';
import { useState } from 'react';
import { useQuery } from 'react-query'
import { Link } from 'react-router-dom';
import { makeRequest } from '../../axios';

import "./rightBar.scss";

const RightBar = () => {
  const [users, setUsers] = useState('')
  const { isLoading, error, data } = useQuery(["users"], () =>
  makeRequest.get("/users").then((res) => {
    return res.data;
  })
  );

console.log(data)

  return (
    <div className="rightBar">
      <div className="container">
        <div className="item">
          <span>Suggestions For You</span>

          {isLoading ? "loading..." : data.map((user) => {
            return (

              <Link to={`/profile/${user.id}`} style={{textDecoration: "none"}}>
              <div className="user">
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
         ) })}
          
     

        </div>
      </div>
    </div>
  );
};

export default RightBar;
