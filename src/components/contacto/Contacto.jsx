import {
  Button,
  Col,
  Container,
  Form,
  Row,
  Spinner,
  Toast,
  ToastContainer,
} from "react-bootstrap";
import "./Contacto.css";
import { FaWhatsapp } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
import { IoIosTimer } from "react-icons/io";
import { PiScales } from "react-icons/pi";
import emailjs from "@emailjs/browser";
import { useEffect, useState } from "react";
import { IoArrowForwardOutline } from "react-icons/io5";

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
  const [mostrarToast, setMostrarToast] = useState(false);
  const [errores, setErrores] = useState({});

  const MAX_MENSAJE = 300;

  const handleSubmit = (e) => {
    e.preventDefault();

    const nombreLimpio = nombre.trim();
    const telefonoLimpio = telefono.trim();
    const correoLimpio = correo.trim().toLowerCase();
    const asuntoLimpio = asunto.trim();
    const mensajeLimpio = mensaje.trim();

    if (enviando) {
      setEstado("error");
      setEnviando(false);
      return;
    }

    const nuevosErrores = {};

    if (!nombreLimpio) {
      nuevosErrores.nombre = "El nombre es obligatorio";
    } else if (nombreLimpio.length < 3 || nombreLimpio.length > 40) {
      nuevosErrores.nombre = "El nombre debe tener entre 3 y 40 caracteres";
    } else if (!/^[A-Za-zÁÉÍÓÚáéíóúÑñ ]+$/.test(nombreLimpio)) {
      nuevosErrores.nombre = "El nombre solo puede contener letras y espacios";
    }

    if (!telefonoLimpio) {
      nuevosErrores.telefono = "El teléfono es obligatorio";
    } else if (!/^\+?[0-9 ]+$/.test(telefonoLimpio)) {
      nuevosErrores.telefono = "Solo números, espacios y + al inicio";
    } else if (!/[0-9]/.test(telefonoLimpio)) {
      nuevosErrores.telefono = "Debe contener al menos un número";
    } else if (telefonoLimpio.length < 7 || telefonoLimpio.length > 15) {
      nuevosErrores.telefono = "Debe tener entre 7 y 15 caracteres";
    }

    if (!correoLimpio) {
      nuevosErrores.correo = "El correo es obligatorio";
    } else if (correoLimpio.length < 5 || correoLimpio.length > 80) {
      nuevosErrores.correo = "El correo tiene una longitud inválida";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(correoLimpio)) {
      nuevosErrores.correo = "Formato de correo inválido";
    }

    if (!asuntoLimpio) {
      nuevosErrores.asunto = "El asunto es obligatorio";
    } else if (asuntoLimpio.length < 4 || asuntoLimpio.length > 60) {
      nuevosErrores.asunto = "El asunto debe tener entre 4 y 60 caracteres";
    } else if (!/[a-zA-ZáéíóúÁÉÍÓÚñÑ]/.test(asuntoLimpio)) {
      nuevosErrores.asunto = "El asunto debe contener al menos una letra";
    }

    if (!mensajeLimpio) {
      nuevosErrores.mensaje = "El mensaje es obligatorio";
    } else if (mensajeLimpio.length < 10) {
      nuevosErrores.mensaje = "El mensaje debe tener entre 10 y 300 caracteres";
    } else if (!/[a-zA-ZáéíóúÁÉÍÓÚñÑ]/.test(mensajeLimpio)) {
      nuevosErrores.mensaje = "El mensaje debe contener al menos una letra";
    }

    if (Object.keys(nuevosErrores).length > 0) {
      setErrores(nuevosErrores);
      setEstado("null");
      setTimeout(() => setEstado("error"), 0);
      return;
    }

    setErrores({});
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

    console.log(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
    );

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
      setMostrarToast(true);

      const timer = setTimeout(() => {
        setMostrarToast(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [estado]);

  return (
    <>
      <Container fluid className="contacto pb-5">
        <section id="contacto" className="encabezado">
          <div className="d-flex justify-content-center align-items-center mb-3">
            <PiScales size={20} />
            <span>Contacto</span>
          </div>
          <h2>Acompañamiento legal claro, humano y profesional.</h2>
          <p>
            Defiendo tus derechos con compromiso, cercanía y responsabilidad.
          </p>
        </section>

        <Row className="row-contacto position-relative">
          <Col
            sm="12"
            md="5"
            lg="5"
            data-aos="fade-right"
            data-aos-duration="2000"
            className="col-contacto g-0"
          >
            <a
              className="item-contacto"
              href="https://wa.me/5493815562900?text=Hola,%20quiero%20hacer%20una%20consulta"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="icono-contacto">
                <FaWhatsapp className="icon" />
              </div>
              <div className="datos-contacto ">
                <strong className="">WhatsApp:</strong>
                <p className="">+54 9 3815 56-2900</p>
              </div>
              <IoArrowForwardOutline className="arrow-icon" />
            </a>

            <a
              className="item-contacto"
              href="mailto:silvia.mercedes.medina@gmail.com?subject=Consulta&body=Hola,%0D%0A%0D%0AQuería hacer una consulta."
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="icono-contacto">
                <TfiEmail className="icon" />
              </div>
              <div className="datos-contacto ">
                <strong className="">Email:</strong>
                <p className="">silvia.mercedes.medina@gmail.com</p>
              </div>
              <IoArrowForwardOutline className="arrow-icon" />
            </a>

            <div className="item-contacto">
              <div className="icono-contacto">
                <IoIosTimer className="icon" />
              </div>
              <div className="datos-contacto ">
                <strong>Disponibilidad:</strong>
                <p>Lunes a Viernes: 8:00 a 12:00 y 16:00 a 21:00</p>
              </div>
            </div>
          </Col>
          <Col sm="12" md="7" lg="7" className="col-formulario g-0">
            <div
              data-aos="fade-left"
              data-aos-duration="2000"
              className="form-contacto"
            >
              <Form noValidate onSubmit={handleSubmit} className="form py-4">
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
                    onChange={(e) => {
                      setNombre(e.target.value);
                      setErrores((prev) => ({ ...prev, nombre: null }));
                    }}
                    isInvalid={!!errores.nombre}
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    {errores.nombre}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formTelefono">
                  <Form.Label className="form-label">Teléfono</Form.Label>
                  <Form.Control
                    className="form-control"
                    type="tel"
                    placeholder="Ej: +54 9 381..."
                    value={telefono}
                    onChange={(e) => {
                      setTelefono(e.target.value);
                      setErrores((prev) => ({ ...prev, telefono: null }));
                    }}
                    inputMode="numeric"
                    isInvalid={!!errores.telefono}
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    {errores.telefono}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formEmail">
                  <Form.Label className="form-label">Correo</Form.Label>
                  <Form.Control
                    className="form-control"
                    type="email"
                    placeholder="tucorreo@gmail.com"
                    value={correo}
                    onChange={(e) => {
                      setCorreo(e.target.value);
                      setErrores((prev) => ({ ...prev, correo: null }));
                    }}
                    isInvalid={!!errores.correo}
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    {errores.correo}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formAsunto">
                  <Form.Label className="form-label">Asunto</Form.Label>
                  <Form.Control
                    className="form-control"
                    type="text"
                    placeholder="Motivo de la consulta"
                    value={asunto}
                    onChange={(e) => {
                      setAsunto(e.target.value);
                      setErrores((prev) => ({ ...prev, asunto: null }));
                    }}
                    isInvalid={!!errores.asunto}
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    {errores.asunto}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group
                  className="mb-3 position-relative"
                  controlId="formTexto"
                >
                  <Form.Label className="form-label">Mensaje</Form.Label>
                  <Form.Control
                    className="form-control"
                    as="textarea"
                    rows={5}
                    placeholder="Hola, me gustaría hacer una consulta..."
                    value={mensaje}
                    onChange={(e) => {
                      setMensaje(e.target.value);
                      setErrores((prev) => ({ ...prev, mensaje: null }));
                    }}
                    isInvalid={!!errores.mensaje}
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    {errores.mensaje}
                  </Form.Control.Feedback>

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
              </Form>
            </div>
          </Col>
          <ToastContainer
            position="bottom-end"
            className="p-3 position-absolute"
          >
            <Toast
              bg={estado === "ok" ? "success" : "danger"}
              show={mostrarToast}
              onClose={() => {
                setMostrarToast(false);
                setEstado(null);
              }}
            >
              <Toast.Body className="text-white">
                {estado === "ok"
                  ? "Tu mensaje fue enviado correctamente."
                  : "No se pudo enviar el mensaje. Intente nuevamente."}
              </Toast.Body>
            </Toast>
          </ToastContainer>
        </Row>
      </Container>
    </>
  );
};

export default Contacto;
