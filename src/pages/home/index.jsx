import Posts from "../../components/posts";
import Share from "../../components/share";
import { Container } from "./styles";

const Home = () => {
  return (
    <Container>
      <Share />
      <Posts />
    </Container>
  );
};

export default Home;
