import { Button, Container } from "react-bootstrap";
import "./Inicio.css";
import { IoIosArrowForward } from "react-icons/io";

const Inicio = () => {
  return (
    <Container fluid id="inicio" className="inicio g-0">
      <div data-aos="fade-up" data-aos-duration="1000" className="contenedor">
        <div className="titulos">
          <h3>Abogada</h3>
          <h1>Silvia Mercedes Medina</h1>
          <p>Especialista en Derecho Civil y de Familia</p>
        </div>
        <Button href="/#contacto" className="btn-inicio">
          Contacto
          <IoIosArrowForward />
        </Button>
      </div>
    </Container>
  );
};

export default Inicio;
