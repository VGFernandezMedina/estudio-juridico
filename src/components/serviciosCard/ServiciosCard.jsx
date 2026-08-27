import { Badge, Card, Col } from "react-bootstrap";
import "./ServiciosCard.css";

const ServiciosCard = ({ img, titulo, descripcion, etiqueta }) => {
  return (
    <Col
      xs="6"
      sm="6"
      md="4"
      lg="4"
      className="pb-4 col-servicios"
      data-aos="fade-up"
      data-aos-delay="300"
    >
      <Card className="h-100 card-servicios rounded-2">
        <div className="img-wrapper">
          <Card.Img className="img-card" variant="top" src={img} />
        </div>
        <Card.Body className="body-card d-flex flex-column">
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
