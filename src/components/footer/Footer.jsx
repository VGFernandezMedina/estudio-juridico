import { Col, Container, Image, Row } from "react-bootstrap";
import "./Footer.css";
import logo from "/logo.png";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <Container fluid className="footer">
        <Row>
          <Col sm="12" md="4" lg="4" className="col-img-footer">
            <Image fluid src={logo} className="logo-footer" />
          </Col>

          <Col sm="12" md="4" lg="4" className="col-center-footer">
            <h5 className="text-center">Disponibilidad Horaria</h5>
            <ul className="list-unstyled">
              <li>
                <strong>Lunes a Viernes</strong>
                <span>8:00 - 12:00 / 16:00 - 21:00</span>
              </li>
              <hr />
              <li>
                <strong>Sabado y Domingo</strong>
                <span>Sin actividad</span>
              </li>
            </ul>
          </Col>

          <Col sm="12" md="4" lg="4" className="col-social-footer">
            <h5 className="text-center">Redes sociales</h5>
            <ul className="list-unstyled">
              <li>
                <a href="" target="_blank" rel="noopener noreferrer">
                  <FaWhatsapp className="icon-footer" />
                </a>
              </li>
              <li>
                <a href="" target="_blank" rel="noopener noreferrer">
                  <FaFacebookF className="icon-footer" />
                </a>
              </li>
              <li>
                <a href="" target="_blank" rel="noopener noreferrer">
                  <FaInstagram className="icon-footer" />
                </a>
              </li>
              <li>
                <a href="" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin className="icon-footer" />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
