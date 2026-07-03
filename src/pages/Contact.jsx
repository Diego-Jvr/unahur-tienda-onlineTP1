import { useState, useContext } from "react";
import { Form, Button, Container, Alert } from "react-bootstrap";
import { CartContext } from "../context/CartContext";

function Contact() {
  
  const { cart, total, clearCart } = useContext(CartContext);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    delivery: "Retiro en el local",
    message: "",
  });

  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.address
    ) {
      alert("Completa todos los campos obligatorios.");
      return;
    }

    if (!formData.email.includes("@")) {
      alert("Ingrese un email válido.");
      return;
    }

    if (cart.length === 0) {
      alert("El carrito está vacío.");
      return;
    }
    
    clearCart();
    setSuccess(true);
  };

  return (
    <Container className="mt-4" style={{ maxWidth: "700px" }}>
      <h2>Finalizar compra</h2>

      <p>
        <strong>Total a pagar:</strong> ${total}
      </p>

      {success && (
        <Alert variant="success">
          ¡Compra realizada correctamente!
        </Alert>
      )}

      <Form onSubmit={handleSubmit}>

        <Form.Group className="mb-3">
          <Form.Label>Nombre y apellido</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Teléfono</Form.Label>
            <Form.Control
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  phone: e.target.value.replace(/\D/g, ""),
                })
              }
            />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Dirección</Form.Label>
          <Form.Control
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Método de entrega</Form.Label>
          <Form.Select
            name="delivery"
            value={formData.delivery}
            onChange={handleChange}
          >
            <option>Retiro en el local</option>
            <option>Envío a domicilio</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Mensaje (opcional)</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
        </Form.Group>

        <Button type="submit">
          Confirmar compra
        </Button>

      </Form>
    </Container>
  );
}

export default Contact;