import "./Contador.css";
import { Container } from "react-bootstrap";
import { PiScales } from "react-icons/pi";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const Contador = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

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

      <section className="contador" ref={ref}>
        <div>
          <h2>{inView && <CountUp end={30} duration={2.5} />}+</h2>
          <p>Años de experiencia</p>
        </div>
        <div>
          <h2>{inView && <CountUp end={250} duration={2.5} />}+</h2>
          <p>Casos exitosos</p>
        </div>
        <div>
          <h2>{inView && <CountUp end={300} duration={2.5} />}+</h2>
          <p>Clientes atendidos</p>
        </div>
        <div>
          <h2>{inView && <CountUp end={98} duration={2.5} />}%</h2>
          <p>Satisfacción de los clientes</p>
        </div>
      </section>
    </Container>
  );
};

export default Contador;
