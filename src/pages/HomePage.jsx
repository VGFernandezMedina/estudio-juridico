import Inicio from "../components/inicio/Inicio";
import Servicios from "../components/servicios/Servicios";
import "./HomePage.css";
import { Container } from "react-bootstrap";

const HomePage = () => {
  return (
    <>
      <Container fluid className="home g-0">
        <Inicio />
        <Servicios />
      </Container>
    </>
  );
};

export default HomePage;
