import { Container, Image, Nav, Navbar } from "react-bootstrap";
import "./NavbarC.css";
import logo from "/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { HashLink } from "react-router-hash-link";
import { useState } from "react";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

const NavbarC = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar collapseOnSelect expand="lg" className="navbar" expanded={expanded}>
      <Container fluid>
        <Nav.Link href="/">
          <Image fluid className="logo-nav" src={logo} alt="logo" />
        </Nav.Link>
        <Navbar.Toggle
          onClick={() => setExpanded(!expanded)}
          aria-controls="responsive-navbar-nav"
          className={`nav-toggle ${expanded ? "open" : ""}`}
        >
          <span className="custom-toggler-icon">
            {expanded ? (
              <AiOutlineClose className="icon-navbar" />
            ) : (
              <GiHamburgerMenu className="icon-navbar" />
            )}
          </span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="nav-right">
            <Nav.Link
              as={HashLink}
              smooth
              to="/#inicio"
              onClick={() => setExpanded(false)}
            >
              Inicio
            </Nav.Link>
            <Nav.Link
              as={HashLink}
              smooth
              to="/#servicios"
              onClick={() => setExpanded(false)}
            >
              Servicios
            </Nav.Link>
            <Nav.Link
              as={HashLink}
              smooth
              to="/#contacto"
              onClick={() => setExpanded(false)}
            >
              Contacto
            </Nav.Link>
            <div className="iconos-navbar d-lg-none">
              <a
                href="https://wa.me/5493815562900?text=Hola,%20quiero%20hacer%20una%20consulta"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp className="icon-footer" />
              </a>
              <a
                href="https://www.facebook.com/silvia.medina.181667"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF className="icon-footer" />
              </a>
              <a
                href="https://www.instagram.com/silvia.mercedes.medina/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="icon-footer" />
              </a>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarC;
