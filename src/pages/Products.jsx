import products from "../data/products";
import ProductCard from "../components/ProductCard";
import { Container, Row, Col } from "react-bootstrap";

function Products() {
  return (
    <Container className="mt-4">
      <h2 className="mb-4">Productos</h2>

      <Row>
        {products.map((product) => (
          <Col md={4} className="mb-4" key={product.id}>
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Products;