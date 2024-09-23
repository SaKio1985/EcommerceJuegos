import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import "./CartComponent.css";

const CartComponent = () => {
  const { cart, removeFromCart, updateQuantity } = useContext(CartContext);

  const groupedCart = cart.reduce((acc, item) => {
    if (!acc[item.id]) {
      acc[item.id] = { ...item, quantity: 0 };
    }
    acc[item.id].quantity += 1;
    return acc;
  }, {});

  const total = Object.values(groupedCart).reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-container">
      <h2>Carrito de Compras</h2>
      {Object.values(groupedCart).map((item) => (
        <div key={item.id} className="cart-item">
          <img src={item.image} alt={item.title} className="cart-item-image" />
          <div className="cart-item-info">
            <h3>{item.title}</h3>
            <p>Precio: {item.price}€</p>
            <div className="quantity-control">
              <button
                onClick={() => updateQuantity(item.id, item.quantity - 1)}
              >
                -
              </button>
              <span>{item.quantity}</span>
              <button
                onClick={() => updateQuantity(item.id, item.quantity + 1)}
              >
                +
              </button>
            </div>
          </div>
          <button
            className="remove-item"
            onClick={() => removeFromCart(item.id)}
          >
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>
      ))}
      <div className="cart-total">
        <h3>Total: {total.toFixed(2)}€</h3>
      </div>
    </div>
  );
};

export default CartComponent;
