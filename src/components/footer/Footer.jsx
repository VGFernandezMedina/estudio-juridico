import { Col, Container, Image, Row } from "react-bootstrap";
import "./Footer.css";
import logo from "/public/logo.png";

const Footer = () => {
  return (
    <footer>
      <Container fluid className="footer">
        <Row className="h-100">
          <Col
            sm="12"
            md="4"
            lg="4"
            className="d-flex align-items-center justify-content-center"
          >
            <Image fluid src={logo} className="logo-footer" />
          </Col>
          <Col sm="12" md="4" lg="4" className="px-2 pt-5">
            <h5 className="text-center pb-4">Disponibilidad Horaria</h5>
            <ul className="list-unstyled">
              <li className="">
                <strong>Lunes a Viernes</strong>
                <span>8:00 - 12:00 / 16:00 - 21:00</span>
              </li>
              <hr />
              <li className="">
                <strong>Sabado y Domingo</strong>
                <span>Sin actividad</span>
              </li>
            </ul>
          </Col>
          <Col sm="12" md="4" lg="4" className=""></Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
