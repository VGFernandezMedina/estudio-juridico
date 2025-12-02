import Inicio from "../components/inicio/Inicio";
import "./HomePage.css";
import { Container } from "react-bootstrap";

const HomePage = () => {
  return (
    <>
      <Container fluid className="home g-0">
        <Inicio />
      </Container>
    </>
  );
};

export default HomePage;
