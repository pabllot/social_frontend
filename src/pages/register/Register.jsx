import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios'
import { Button, ButtonForm, Card, Container, Form, H1, H1Left, Input, Left, Paragraph, Right, Span } from "./styles";

const Register = () => {  
  const navigate = useNavigate()
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
      navigate('/login')
    } catch (error) {
      setError(error.response.data)
    }
  }

  return (
    <Container>
      <Card>
        <Left>
          <H1Left>Lama Social.</H1Left>
          <Paragraph>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero cum,
            alias totam numquam ipsa exercitationem dignissimos, error nam,
            consequatur.
          </Paragraph>
          <Span>Do you have an account?</Span>
          <Link to="/login">
          <Button>Login</Button>
          </Link>
        </Left>
        <Right>
          <H1>Register</H1>
          <Form>
            <Input type="text"  placeholder="Username" name="username" onChange={handleChange}/>
            <Input type="text" autocomplete="off" placeholder="Name" name="name"onChange={handleChange}/>
            <Input type="password" placeholder="Password" name="password" onChange={handleChange}/>
            {error && error}
            <ButtonForm onClick={handleClick}>Register</ButtonForm>
          </Form>
        </Right>
      </Card>
    </Container>
  );
};

export default Register;
