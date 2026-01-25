import { Container, Row } from "react-bootstrap";
import "./Servicios.css";
import servicios from "../../data/servicesData.js";
import ServiciosCard from "../serviciosCard/ServiciosCard";
import { PiScales } from "react-icons/pi";

const Servicios = () => {
  return (
    <Container fluid className="servicios pb-5">
      <section className="encabezado">
        <div className="d-flex justify-content-center align-items-center mb-3">
          <PiScales size={20} />
          <span>Servicios</span>
        </div>
        <h2>Acompañamiento legal claro, humano y profesional.</h2>
        <p>Defiendo tus derechos con compromiso, cercanía y responsabilidad.</p>
      </section>

      <Row className="row-servicios">
        {servicios.map((servicio) => (
          <ServiciosCard
            key={servicio.id}
            img={servicio.img}
            titulo={servicio.titulo}
            descripcion={servicio.descripcion}
            etiqueta={servicio.etiqueta}
          />
        ))}
      </Row>
    </Container>
  );
};

export default Servicios;
