import { useState } from "react";
import { Link } from "react-router-dom";
import "./register.scss";
import axios from 'axios'

const Register = () => {  
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
    name: "",
    profilePic: 'user.png', 
    coverPic: 'cover.png'
  });

  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  const handleClick = async (e) => {
    e.preventDefault()
    try {
      await axios.post("http://localhost:8800/api/auth/register", inputs);
    } catch (error) {
      setError(error.response.data)
    }
  }

  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>Lama Social.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero cum,
            alias totam numquam ipsa exercitationem dignissimos, error nam,
            consequatur.
          </p>
          <span>Do you have an account?</span>
          <Link to="/login">
          <button>Login</button>
          </Link>
        </div>
        <div className="right">
          <h1>Register</h1>
          <form>
            <input type="text"  placeholder="Username" name="username" onChange={handleChange}/>
            <input type="text" autocomplete="off" placeholder="Name" name="name"onChange={handleChange}/>
            <input type="password" placeholder="Password" name="password" onChange={handleChange}/>
            {error && error}
            <button onClick={handleClick}>Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
