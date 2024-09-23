import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
/* import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons"; */
import "./CartComponent.css";

const CartComponent = () => {
  const { cart, setCart, agregarProducto, carroTotal } =
    useContext(CartContext);

  return (
    <div className="cart-container">
      <h2>Carrito de Compras</h2>
      {cart.map((item) => (
        <div key={item.id} className="cart-item">
          <img src={item.image} alt={item.title} className="cart-item-image" />
          <div className="cart-item-info">
            <h3>{item.title}</h3>
            <p>Precio: {item.price}€</p>
            <div className="quantity-control">
              <button>-</button>
              <span>{item.quantity}</span>
              <button>+</button>
            </div>
          </div>
        </div>
      ))}
      <div className="cart-total">
        <h3>Total: {carroTotal().toFixed(2)}€</h3>
      </div>
    </div>
  );
};

export default CartComponent;
