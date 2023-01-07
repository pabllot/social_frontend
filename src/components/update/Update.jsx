import { useState } from 'react';
import { makeRequest } from '../../axios';
import { useMutation, useQueryClient } from 'react-query';
import "./update.scss"


const Update = ({ setOpenUpdate, user }) => {
    const queryClient = useQueryClient();
    const [cover, setCover] = useState(null)
    const [profile, setProfile] = useState(null)
    const [texts, setTexts] = useState({
        name: "",
        city: "",
        website: ""
    });

    const upload = async (file) => {
        try {
          const formData = new FormData();
          formData.append("file", file);
          const res = await makeRequest.post("/upload", formData);
          return res.data;
        } catch (err) {
          console.log(err)
        }
      }

    const handleChange = (e) => {
        setTexts((prev) => ({...prev, [e.target.name]: [e.target.value] }));
    };

    const mutation = useMutation((user) => {
        return makeRequest.put("/users", user)
      }, {
        onSuccess: ()=>{
          //Invalid and refetch
          queryClient.invalidateQueries(["user"])
        }
      })
    
      const handleSubmit = async (e) => {
        e.preventDefault();

        //TODO: find a better way to get image URL
        
        let coverUrl;
        let profileUrl;
        coverUrl = cover ? await upload(cover) : user.coverPic;
        profileUrl = profile ? await upload(profile) : user.profilePic;
        
        mutation.mutate({ ...texts, coverPic: coverUrl, profilePic: profileUrl });
        setOpenUpdate(false);
        setCover(null);
        setProfile(null);
      }

      return (
        <div className="update">
          <div className="wrapper">
            <h1>Update Your Profile</h1>
            <form>
              <div className="files">
                <label htmlFor="cover">
                  <span>Cover Picture</span>
                  <div className="imgContainer">
                    <img 
                      src={
                        cover
                          ? URL.createObjectURL(cover)
                          : "/upload/" + user.coverPic
                      }
                      alt=""
                    />
                  </div>
                </label>
                <input
                  type="file"
                  id="cover"
                  style={{ display: "none" }}
                  onChange={(e) => setCover(e.target.files[0])}
                />
                <label htmlFor="profile">
                  <span>Profile Picture</span>
                  <div className="imgContainer">
                    <img 
                      src={
                        profile
                          ? URL.createObjectURL(profile)
                          : "/upload/" + user.profilePic
                      }
                      alt=""
                    />
                  </div>
                </label>
                <input
                  type="file"
                  id="profile"
                  style={{ display: "none" }}
                  onChange={(e) => setProfile(e.target.files[0])}
                />
              </div>
              
              <label>Name</label>
              <input
                type="text"
                autoComplete='off'
                value={texts.name}
                name="name"
                onChange={handleChange}
              />
              <label>Country / City</label>
              <input
                type="text"
                name="city"
                value={texts.city}
                onChange={handleChange}
                autoComplete='off'
              />
              <label>Website</label>
              <input
                type="text"
                name="website"
                value={texts.website}
                onChange={handleChange}
                autoComplete='off'
              />
              <button onClick={handleSubmit}>Update</button>
            </form>
            <button className="close" onClick={() => setOpenUpdate(false)}>
              close
            </button>
          </div>
        </div>
      );
    };

export default Update