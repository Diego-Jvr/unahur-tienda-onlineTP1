import { useState } from "react";
import products from "../data/products";
import ProductCard from "../components/ProductCard";
import { Container, Row, Col, Form } from "react-bootstrap";

function Products() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const categories = [...new Set(products.map((p) => p.category))];

    const filteredProducts = products.filter((product) => {
      const matchesName = product.name
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchesCategory =
        category === "" || product.category === category;

      return matchesName && matchesCategory;
    });

  return (
    <Container className="mt-4">
      <h2 className="mb-4">Productos</h2>

      <Form.Select
        className="mb-3"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="">Todas las categorías</option>

        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </Form.Select>

      <Form.Control
        className="mb-4"
        placeholder="Buscar producto..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <Row>
        {filteredProducts.map((product) => (
          <Col md={4} className="mb-4" key={product.id}>
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Products;