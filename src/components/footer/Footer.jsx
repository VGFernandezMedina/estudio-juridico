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
          <Col sm="12" md="4" lg="4" className="p-4">
            <h5 className="text-center pb-4">Disponibilidad Horaria</h5>
            <ul className="list-unstyled">
              <li className="">
                <span>Lunes a Viernes</span>
                <span>9:00 - 18:00</span>
              </li>
              <hr />
              <li className="">
                <span>Sabado</span>
                <span>9:00 - 13:00</span>
              </li>
              <hr />
              <li className="">
                <span>Domingo</span>
                <span>Cerrado</span>
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
