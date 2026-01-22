import { Badge, Card, Col } from "react-bootstrap";
import "./ServiciosCard.css";

const ServiciosCard = ({ img, titulo, descripcion, etiqueta }) => {
  return (
    <Col sm="12" md="6" lg="3" className="pb-4 col-servicios">
      <Card className="h-100 card-servicios rounded-2">
        <Card.Img className="img-card" variant="top" src={img} />
        <Card.Body className="body-card d-flex flex-column" src={img}>
          <Card.Title className="title-card">{titulo}</Card.Title>
          <Card.Text className="description-card">{descripcion}</Card.Text>
          <Badge
            bg={null}
            className="etiqueta-servicios mt-auto align-self-start"
          >
            {etiqueta}
          </Badge>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ServiciosCard;
