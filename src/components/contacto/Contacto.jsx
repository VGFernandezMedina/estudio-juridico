import { Button, Col, Container, Form, Row } from "react-bootstrap";
import "./Contacto.css";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
import { IoIosTimer } from "react-icons/io";
import { PiScales } from "react-icons/pi";

const Contacto = () => {
  return (
    <Container fluid className="contacto pb-5">
      <section className="encabezado">
        <div className="d-flex justify-content-center align-items-center mb-3">
          <PiScales size={20} />
          <span>Contacto</span>
        </div>
        <h2>Acompañamiento legal claro, humano y profesional.</h2>
        <p>Defiendo tus derechos con compromiso, cercanía y responsabilidad.</p>
      </section>

      <Row className="row-contacto">
        <Col sm="12" md="5" lg="5" className="col-contacto g-0">
          <div className="item-contacto">
            <div className="icono-contacto">
              <FaWhatsapp className="icon" />
            </div>
            <div className="datos-contacto ">
              <strong className="">WhatsApp:</strong>
              <p className="">+54 9 3815 56-2900</p>
            </div>
          </div>
          <div className="item-contacto">
            <div className="icono-contacto">
              <TfiEmail className="icon" />
            </div>
            <div className="datos-contacto ">
              <strong className="">Email:</strong>
              <p className="">silvia.mercedes.medina@gmail.com</p>
            </div>
          </div>
          <div className="item-contacto">
            <div className="icono-contacto">
              <IoIosTimer className="icon" />
            </div>
            <div className="datos-contacto ">
              <strong>Disponibilidad:</strong>
              <p>Lunes a Viernes: 8:00 a 12:00 y 16:00 a 21:00</p>
            </div>
          </div>
          {/*         <div className="item-contacto bg-transparent d-flex justify-content-evenly">
            <div className="icono-contacto">
              <FaFacebookF size={24} />
            </div>
            <div className="icono-contacto">
              <FaInstagram size={24} />
            </div>
            <div className="icono-contacto">
              <FaLinkedin size={24} />
            </div>
          </div> */}
        </Col>
        <Col sm="12" md="7" lg="7" className="col-formulario g-0">
          <div className="form-contacto">
            <Form className="form py-4">
              <h3 className="pb-4">Formulario de contacto</h3>
              <Form.Group className="mb-3" controlId="formNombre">
                <Form.Label className="form-label">Nombre</Form.Label>
                <Form.Control
                  className="form-control"
                  type="text"
                  placeholder="Tu nombre"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formTelefono">
                <Form.Label className="form-label">Teléfono</Form.Label>
                <Form.Control
                  className="form-control"
                  type="tel"
                  placeholder="Ej: +54 9 381..."
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label className="form-label">Correo</Form.Label>
                <Form.Control
                  className="form-control"
                  type="email"
                  placeholder="tucorreo@mail.com.com"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formTexto">
                <Form.Label className="form-label">Mensaje</Form.Label>
                <Form.Control className="form-control" as="textarea" rows={3} />
              </Form.Group>
              <div className="d-flex justify-content-center">
                <Button variant="primary">Enviar mensaje</Button>
              </div>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Contacto;
