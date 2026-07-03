import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Container, Card, Button } from "react-bootstrap";

function Cart() {
  const {
    cart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    total,
    totalProducts,
  } = useContext(CartContext);

  return (
    <Container className="mt-4">

      <h2>Carrito</h2>

      {cart.length === 0 ? (
        <h4>El carrito está vacío.</h4>
      ) : (
        <>
          {cart.map((item) => (
            <Card key={item.id} className="mb-3 p-3">

              <h4>{item.name}</h4>

              <p>Precio: ${item.price}</p>

              <p>Cantidad: {item.quantity}</p>

              <p>Subtotal: ${item.price * item.quantity}</p>

              <div>

                <Button
                  variant="success"
                  className="me-2"
                  onClick={() => increaseQuantity(item.id)}
                >
                  +
                </Button>

                <Button
                  variant="warning"
                  className="me-2"
                  onClick={() => decreaseQuantity(item.id)}
                >
                  -
                </Button>

                <Button
                  variant="danger"
                  onClick={() => removeFromCart(item.id)}
                >
                  Eliminar
                </Button>

              </div>

            </Card>
          ))}

          <hr />

          <h4>Total de productos: {totalProducts}</h4>

          <h3>Total: ${total}</h3>

        </>
      )}
    </Container>
  );
}

export default Cart;