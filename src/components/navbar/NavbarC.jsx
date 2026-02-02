import { Container, Image, Nav, Navbar } from "react-bootstrap";
import "./NavbarC.css";
import logo from "/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";

const NavbarC = () => {
  return (
    <Navbar collapseOnSelect expand="lg" className="navbar">
      <Container fluid>
        <Nav.Link href="/">
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
            <Nav.Link>Inicio</Nav.Link>
            <Nav.Link>Servicios</Nav.Link>
            <Nav.Link>Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarC;
