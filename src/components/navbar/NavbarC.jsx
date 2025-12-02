import { Container, Image, Nav, Navbar } from "react-bootstrap";
import "./NavbarC.css";
import logo from "/logo.png";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";

const NavbarC = () => {
  return (
    <Navbar expand="lg" className="navbar">
      <Container>
        <Nav.Link href="#">
          <Image fluid className="logo-nav" src={logo} alt="logo" />
        </Nav.Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="position-absolute start-50 translate-middle-x nav-center">
            <Nav.Link href="#">Inicio</Nav.Link>
            <Nav.Link href="#">Servicios</Nav.Link>
            <Nav.Link href="#">Contacto</Nav.Link>
          </Nav>
          <Nav className="nav-right">
            <div className="nav-icon">
              <a href="" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp size={22} />
              </a>
              <a href="" target="_blank" rel="noopener noreferrer">
                <FaFacebookF size={22} />
              </a>
              <a href="" target="_blank" rel="noopener noreferrer">
                <FaInstagram size={22} />
              </a>
              <a href="" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={22} />
              </a>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarC;
