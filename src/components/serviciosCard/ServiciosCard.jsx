import { Card, Col } from "react-bootstrap";
import "./ServiciosCard.css";

const ServiciosCard = ({ img, titulo, descripcion }) => {
  return (
    <Col sm="12" md="4" lg="4">
      <Card className="h-100 card-servicios rounded-3">
        <Card.Img variant="top" src={img} />
        <Card.Body className="body-card">
          <Card.Title className="title-card">{titulo}</Card.Title>
          <Card.Text className="description-card">{descripcion}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ServiciosCard;
