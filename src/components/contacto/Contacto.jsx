import { Button, Col, Container, Form, Row, Spinner } from "react-bootstrap";
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
import emailjs from "@emailjs/browser";
import { useEffect, useState } from "react";

const Contacto = () => {
  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");
  const [correo, setCorreo] = useState("");
  const [asunto, setAsunto] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [enviando, setEnviando] = useState(false);
  const [estado, setEstado] = useState(null);
  const [empresa, setEmpresa] = useState(""); // bots
  const [ultimoEnvio, setUltimoEnvio] = useState(null);

  const MAX_MENSAJE = 300;

  const handleSubmit = (e) => {
    e.preventDefault();

    const nombreLimpio = nombre.trim();
    const telefonoLimpio = telefono.trim();
    const correoLimpio = correo.trim();
    const asuntoLimpio = asunto.trim();
    const mensajeLimpio = mensaje.trim();

    if (!nombreLimpio || !telefonoLimpio || !correoLimpio || !mensajeLimpio) {
      setEstado("error");
      return;
    }

    if (enviando) return;

    setEstado(null);
    setEnviando(true);

    /* BOT */
    if (empresa) {
      console.log("Bot detectado 🤖");
      setEnviando(false);
      return;
    }

    const ahora = Date.now();
    if (ultimoEnvio && ahora - ultimoEnvio < 10000) {
      setEstado("error");
      setEnviando(false);
      return;
    }
    setUltimoEnvio(ahora);

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: nombreLimpio,
          phone: telefonoLimpio,
          email: correoLimpio,
          subject: asuntoLimpio,
          message: mensajeLimpio,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      )
      .then(() => {
        setEstado("ok");
        setNombre("");
        setTelefono("");
        setCorreo("");
        setAsunto("");
        setMensaje("");
      })
      .catch(() => {
        setEstado("error");
      })
      .finally(() => setEnviando(false));
  };

  useEffect(() => {
    if (estado) {
      const timer = setTimeout(() => {
        setEstado(null);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [estado]);

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
            <Form onSubmit={handleSubmit} className="form py-4">
              <h3 className="pb-4">Formulario de contacto</h3>
              <div style={{ display: "none" }}>
                <Form.Control
                  type="text"
                  name="empresa"
                  value={empresa}
                  onChange={(e) => setEmpresa(e.target.value)}
                  autoComplete="off"
                />
              </div>
              <Form.Group className="mb-3" controlId="formNombre">
                <Form.Label className="form-label">Nombre</Form.Label>
                <Form.Control
                  className="form-control"
                  type="text"
                  placeholder="Tu nombre"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                  minLength={3}
                  maxLength={40}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formTelefono">
                <Form.Label className="form-label">Teléfono</Form.Label>
                <Form.Control
                  className="form-control"
                  type="tel"
                  placeholder="Ej: +54 9 381..."
                  value={telefono}
                  onChange={(e) => setTelefono(e.target.value)}
                  inputMode="numeric"
                  minLength={8}
                  maxLength={15}
                  pattern="[0-9+ ]{8,15}"
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label className="form-label">Correo</Form.Label>
                <Form.Control
                  className="form-control"
                  type="email"
                  placeholder="tucorreo@gmail.com"
                  value={correo}
                  onChange={(e) => setCorreo(e.target.value)}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formAsunto">
                <Form.Label className="form-label">Asunto</Form.Label>
                <Form.Control
                  className="form-control"
                  type="text"
                  placeholder="Motivo de la consulta"
                  value={asunto}
                  onChange={(e) => setAsunto(e.target.value)}
                  minLength={3}
                  maxLength={60}
                  required
                />
              </Form.Group>

              <Form.Group
                className="mb-3 position-relative"
                controlId="formTexto"
              >
                <Form.Label className="form-label">Mensaje</Form.Label>
                <Form.Control
                  className="form-control"
                  as="textarea"
                  rows={4}
                  value={mensaje}
                  onChange={(e) => setMensaje(e.target.value)}
                  minLength={10}
                  maxLength={MAX_MENSAJE}
                  required
                />

                <small
                  className={`contador-caracteres ${
                    MAX_MENSAJE - mensaje.length <= 20 ? "text-danger" : ""
                  }`}
                >
                  {MAX_MENSAJE - mensaje.length} / 300
                </small>
              </Form.Group>
              <div className="d-flex justify-content-center">
                <Button type="submit" variant="primary" disabled={enviando}>
                  {enviando ? (
                    <>
                      <Spinner
                        as="span"
                        animation="border"
                        size="sm"
                        role="status"
                        aria-hidden="true"
                        className="me-2"
                      />
                      Enviando...
                    </>
                  ) : (
                    "Enviar mensaje"
                  )}
                </Button>
              </div>

              <div className="estado-mensaje text-center mt-3">
                {estado === "ok" && (
                  <p className="text-success mb-0">
                    Mensaje enviado correctamente
                  </p>
                )}

                {estado === "error" && (
                  <p className="text-danger mb-0">
                    Error al enviar el mensaje. Intente nuevamente.
                  </p>
                )}
              </div>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Contacto;
