import { Container, Button, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function Home() {
  return (
    <Container className="mt-5">

      <Row className="align-items-center">

        <Col md={6}>
          <h1>GameStore</h1>

          <h4 className="text-secondary mb-4">
            Tu tienda online de videojuegos
          </h4>

          <p>
            Descubrí los mejores títulos para PC y consolas.
            Encontrá ofertas, clásicos y los lanzamientos más
            esperados en un solo lugar.
          </p>

          <Button
            as={Link}
            to="/products"
            size="lg"
          >
            Ver catálogo
          </Button>
        </Col>

        <Col md={6}>
          <img
            src="https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800"
            alt="Gaming"
            className="img-fluid rounded shadow"
          />
        </Col>

      </Row>

    </Container>
  );
}

export default Home;