import Posts from "../../components/posts/Posts"
import Share from "../../components/share/Share"
import { Container } from "./styles"

const Home = () => {
  return (
    <Container>
      <Share/>
      <Posts/>
    </Container>
  )
}

export default Home