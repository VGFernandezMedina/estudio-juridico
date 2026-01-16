import { Container, Row } from "react-bootstrap";
import "./Servicios.css";
import servicios from "../../data/servicesData.js";
import ServiciosCard from "../serviciosCard/ServiciosCard";

const Servicios = () => {
  return (
    <Container fluid className="servicios pb-5">
      <h2 className="py-3">Servicios</h2>

      <Row className="row-servicios">
        {servicios.map((servicio) => (
          <ServiciosCard
            key={servicio.id}
            img={servicio.img}
            titulo={servicio.titulo}
            descripcion={servicio.descripcion}
          />
        ))}
      </Row>
    </Container>
  );
};

export default Servicios;
