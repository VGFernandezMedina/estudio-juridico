import { Card, Col, Container, Row } from "react-bootstrap";
import "./Servicios.css";
import trabajo from "/img-trabajo.jpg";
import familias from "/img-familias.jpg";
import CivilComercial from "/img-civil-comercial.jpg";

const Servicios = () => {
  return (
    <Container
      fluid
      className="servicios d-flex align-items-center flex-column justify-content-center py-5"
    >
      <h2 className="pb-4">Servicios</h2>
      <Row className="row-servicios">
        <Col sm="12" md="4" lg="4">
          <Card className="h-100 card-servicios rounded-3">
            <Card.Img variant="top" src={familias} />
            <Card.Body className="body-card">
              <Card.Title className="title-card">
                Derechos de familia
              </Card.Title>
              <Card.Text className="description-card">
                Asesoramiento en divorcios, acuerdos, cuota alimentaria, régimen
                de visitas, adopción y todas las cuestiones vinculadas a las
                relaciones familiares.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col sm="12" md="4" lg="4">
          <Card className="h-100 card-servicios rounded-3">
            <Card.Img variant="top" src={trabajo} />
            <Card.Body className="body-card">
              <Card.Title className="title-card">
                Derechos del trabajo
              </Card.Title>
              <Card.Text className="description-card">
                Defensa de los derechos de trabajadores y empleadores en
                conflictos laborales, despidos, indemnizaciones, accidentes de
                trabajo y relaciones contractuales.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col sm="12" md="4" lg="4">
          <Card className="h-100 card-servicios rounded-3">
            <Card.Img variant="top" src={CivilComercial} />
            <Card.Body className="body-card">
              <Card.Title className="title-card">
                Derecho civil y comercial
              </Card.Title>
              <Card.Text className="description-card">
                Soluciones legales en contratos, deudas, propiedad,
                responsabilidad civil y asuntos comerciales para empresas y
                particulares.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Servicios;
