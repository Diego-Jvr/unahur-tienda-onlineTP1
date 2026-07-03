import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Navigation() {

  const { totalProducts } = useContext(CartContext);

  return (
    
    <Navbar bg="dark" variant="dark" expand="lg">

      <Container>

        <Navbar.Brand>Tienda Online</Navbar.Brand>

        <Nav className="me-auto">
          <Nav.Link as={Link} to="/">
            Inicio
          </Nav.Link>

          <Nav.Link as={Link} to="/products">
            Productos
          </Nav.Link>

          <Nav.Link as={Link} to="/cart">
            Carrito ({totalProducts})
          </Nav.Link>

          <Nav.Link as={Link} to="/contact">
            Contacto
          </Nav.Link>

        </Nav>
      </Container>
    </Navbar>
  );
}

export default Navigation;