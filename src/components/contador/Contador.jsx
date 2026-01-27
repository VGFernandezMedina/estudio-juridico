import { Container } from "react-bootstrap";
import "./Contador.css";
import CountUp from "react-countup";
import { PiScales } from "react-icons/pi";

const Contador = () => {
  return (
    <Container fluid className="contador-container">
      <section className="encabezado">
        <div className="d-flex justify-content-center align-items-center mb-3">
          <PiScales size={20} />
          <span>Experiencia</span>
        </div>
        <h2>Una trayectoria construida con confianza</h2>
        <p>
          Más de tres décadas acompañando a cada cliente con compromiso,
          experiencia y atención personalizada.
        </p>
      </section>

      <section className="contador">
        <div>
          <h2>
            <CountUp end={30} />+
          </h2>
          <p>Años de experiencia</p>
        </div>
        <div>
          <h2>
            <CountUp end={180} />+
          </h2>
          <p>Casos exitosos</p>
        </div>
        <div>
          <h2>
            <CountUp end={230} />+
          </h2>
          <p>Clientes atendidos</p>
        </div>
        <div>
          <h2>
            <CountUp end={98} />%
          </h2>
          <p>Satisfacción de los clientes</p>
        </div>
      </section>
    </Container>
  );
};

export default Contador;
