import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import { Button, Card, Container, Form, FormButton, FormH1, H1, Input, Left, Paragraph, Right, Span } from "./styles";

const Login = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });


  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  const handleLogin = async (e) => {
    e.preventDefault()
    try {
      await login(inputs);
      navigate("/")
      
    } catch (error) {
      setError(error.response.data)
    }
  };

  return (
    <Container>
      <Card>
        <Left>
          <H1>Hello World.</H1>
          <Paragraph>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero cum,
            alias totam numquam ipsa exercitationem dignissimos, error nam,
            consequatur.
          </Paragraph>
          <Span>Don't you have an account?</Span>
          <Link to="/register">
            <Button>Register</Button>
          </Link>
        </Left>
        <Right>
          <FormH1>Login</FormH1>
          <Form>
            <Input type="text" placeholder="Username" name="username" onChange={handleChange}/>
            <Input type="password" placeholder="Password" name="password" onChange={handleChange}/>
            {error && error}
            <FormButton onClick={handleLogin}>Login</FormButton>
          </Form>
        </Right>
      </Card>
    </Container>
  );
};

export default Login;
