import Contacto from "../components/contacto/Contacto";
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
        <Contacto />
      </Container>
    </>
  );
};

export default HomePage;
