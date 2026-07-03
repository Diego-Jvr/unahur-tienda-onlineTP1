import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function ProductCard({ product }) {

  const { addToCart } = useContext(CartContext);

  return (
    <Card className="h-100 shadow">

      <Card.Img
        variant="top"
        src={product.image}
        style={{
          height: "250px",
          objectFit: "cover",
        }}
      />

      <Card.Body className="d-flex flex-column">

        <Card.Title>{product.name}</Card.Title>

        <Card.Text>
          <strong>Categoría:</strong> {product.category}
        </Card.Text>

        <Card.Text>
          {product.description}
        </Card.Text>

        <h5 className="mt-auto">
          ${product.price.toLocaleString("es-AR")}
        </h5>

        <p>
          <strong>Stock:</strong> {product.stock}
        </p>

        <div className="d-flex justify-content-between mt-3">

          <Button
            as={Link}
            to={`/product/${product.id}`}
            variant="primary"
          >
            Ver detalle
          </Button>

          <Button
            variant="success"
            disabled={product.stock === 0}
            onClick={() => addToCart(product)}
          >
            {product.stock === 0
              ? "Sin stock"
              : "Agregar"}
          </Button>

        </div>

      </Card.Body>

    </Card>
  );
}

export default ProductCard;