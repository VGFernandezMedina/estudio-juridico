import { Col, Container, Image, Row } from "react-bootstrap";
import "./Footer.css";
import logo from "/logo.png";
import {
  FaFacebookF,
  FaInstagram,
  /* FaLinkedin, */
  FaWhatsapp,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <Container fluid className="footer">
        <Row>
          <Col sm="12" md="4" lg="4" className="col-img-footer">
            <a href="/">
              <Image fluid src={logo} className="logo-footer" />
            </a>
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
                <a
                  href="https://wa.me/5493815562900?text=Hola,%20quiero%20hacer%20una%20consulta"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaWhatsapp className="icon-footer" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/silvia.medina.181667"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebookF className="icon-footer" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/silvia.mercedes.medina/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram className="icon-footer" />
                </a>
              </li>
              {/* <li>
                <a href="" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin className="icon-footer" />
                </a>
              </li> */}
            </ul>
          </Col>
          <section className="footer-copy">
            <span>© 2026 Silvia Mercedes Medina – Estudio Jurídico.</span>
            <span>
              Desarrollado por
              <a
                href="https://gabrielfm-dev.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="mx-1"
              >
                Gabriel Fernandez
              </a>
              .
            </span>
          </section>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
