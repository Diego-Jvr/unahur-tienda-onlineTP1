import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function ProductCard({ product }) {

  const { addToCart } = useContext(CartContext);

  return (
    <Card className="h-100 shadow-sm">
      <Card.Img variant="top" src={product.image} />

      <Card.Body>
        <Card.Title>{product.name}</Card.Title>

        <Card.Text>
          ${product.price}
        </Card.Text>

        <Card.Text>
          {product.category}
        </Card.Text>

        <Button
          as={Link}
          to={`/product/${product.id}`}
          variant="primary"
          className="me-2"
        >
          Ver detalle
        </Button>

        <Button
          variant="success"
          disabled={product.stock === 0}
          onClick={() => addToCart(product)}
        >
          {product.stock === 0 ? "Sin stock" : "Agregar"}
        </Button>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;