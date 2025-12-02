import { Button, Container } from "react-bootstrap";
import "./Inicio.css";
import { IoIosArrowForward } from "react-icons/io";

const Inicio = () => {
  return (
    <Container fluid className="inicio g-0">
      <div className="contenedor">
        <div className="titulos">
          <h3>Abogada</h3>
          <h1>Silvia Mercedes Medina</h1>
        </div>
        <Button className="btn-inicio">
          Contacto
          <IoIosArrowForward />
        </Button>
      </div>
    </Container>
  );
};

export default Inicio;
