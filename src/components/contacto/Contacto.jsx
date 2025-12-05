import { Col, Container, Form, Row } from "react-bootstrap";
import "./Contacto.css";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
import { IoIosTimer } from "react-icons/io";

const Contacto = () => {
  return (
    <Container fluid className="contacto">
      <h2 className="py-3">Contacto</h2>
      <Row className="h-100">
        <Col sm="12" md="5" lg="5" className="col-contacto">
          <div className="item-contacto">
            <div className="icono-contacto">
              <FaWhatsapp size={30} />
            </div>
            <div className="datos-contacto ">
              <strong className="">WhatsApp:</strong>
              <p className="">+54 9 3815 56-2900</p>
            </div>
          </div>
          <div className="item-contacto">
            <div className="icono-contacto">
              <TfiEmail size={24} />
            </div>
            <div className="datos-contacto ">
              <strong className="">Email:</strong>
              <p className="">silvia.mercedes.medina@gmail.com</p>
            </div>
          </div>
          <div className="item-contacto">
            <div className="icono-contacto">
              <IoIosTimer size={30} />
            </div>
            <div className="datos-contacto ">
              <strong>Disponibilidad:</strong>
              <p>Lunes a Viernes: 8:00 a 12:00 y 16:00 a 21:00</p>
            </div>
          </div>
          <div className="item-contacto bg-transparent d-flex justify-content-evenly">
            <div className="icono-contacto">
              <FaFacebookF size={24} />
            </div>
            <div className="icono-contacto">
              <FaInstagram size={24} />
            </div>
            <div className="icono-contacto">
              <FaLinkedin size={24} />
            </div>
          </div>
        </Col>
        <Col sm="12" md="7" lg="7" className="col-formulario g-0">
          <div className="form-contacto">
            <Form>
              <Form.Group className="mb-3" controlId="formNombre">
                <Form.Label className="form-label">Nombre</Form.Label>
                <Form.Control type="text" placeholder="Tu nombre" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formTelefono">
                <Form.Label className="form-label">Teléfono</Form.Label>
                <Form.Control type="tel" placeholder="Ej: +54 9 381..." />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label className="form-label">Correo</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="tucorreo@mail.com.com"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formTexto">
                <Form.Label className="form-label">Mensaje</Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Form.Group>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Contacto;
