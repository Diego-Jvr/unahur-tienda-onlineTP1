import { useParams, Link } from "react-router-dom";
import products from "../data/products";
import { Container, Card, Button } from "react-bootstrap";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function ProductDetail() {
  const { id } = useParams();

  const product = products.find((p) => p.id === Number(id));
  const { addToCart } = useContext(CartContext);

  if (!product) {
    return (
      <Container className="mt-4">
        <h2>Producto no encontrado</h2>
      </Container>
    );
  }

  return (
    <Container className="mt-4 d-flex justify-content-center">
      <Card style={{ width: "28rem" }}>
        <Card.Img variant="top" src={product.image} />

        <Card.Body>

          <Card.Title>{product.name}</Card.Title>

          <Card.Text>
            <strong>Categoría:</strong> {product.category}
          </Card.Text>

          <Card.Text>
            <strong>Precio:</strong> ${product.price}
          </Card.Text>

          <Card.Text>
            <strong>Stock:</strong> {product.stock}
          </Card.Text>

          <Card.Text>
            {product.description}
          </Card.Text>

          <Button
            as={Link}
            to="/products"
            variant="secondary"
            className="me-2"
          >
            Volver
          </Button>

          <Button
            variant="success"
            disabled={product.stock === 0}
            onClick={() => addToCart(product)}
          >
            {product.stock === 0 ? "Sin stock" : "Agregar al carrito"}
          </Button>

        </Card.Body>
      </Card>
    </Container>
  );
}

export default ProductDetail;