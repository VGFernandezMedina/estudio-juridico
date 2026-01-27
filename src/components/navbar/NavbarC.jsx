import { Container, Image, Nav, Navbar } from "react-bootstrap";
import "./NavbarC.css";
import logo from "/logo.png";
/* import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa"; */
import { GiHamburgerMenu } from "react-icons/gi";

const NavbarC = () => {
  return (
    <Navbar collapseOnSelect expand="lg" className="navbar">
      <Container fluid>
        <Nav.Link href="#">
          <Image fluid className="logo-nav" src={logo} alt="logo" />
        </Nav.Link>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          className="nav-toggle"
        >
          <span className="custom-toggler-icon">
            <GiHamburgerMenu />
          </span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="nav-right">
            <Nav.Link href="#">Inicio</Nav.Link>
            <Nav.Link href="#">Servicios</Nav.Link>
            <Nav.Link href="#">Experiencia</Nav.Link>
            <Nav.Link href="#">Contacto</Nav.Link>
          </Nav>
          {/* <Nav className="nav-right">
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
          </Nav> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
/* asdasdasd */
export default NavbarC;
