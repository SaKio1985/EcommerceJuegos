import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import "./CartComponent.css";

const CartComponent = () => {
	const { cart, actualizarProducto, borrarProducto, carroTotal, setCart } =
		useContext(CartContext);

	// Función que se ejecuta cuando se presiona el botón de compra
	const handleBuy = () => {
		// Simula la acción de pasar a la pasarela de pago
		alert("Estás siendo redirigido a la pasarela de pago...");
		setCart([]); // Limpiar el carrito
	};

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
							<button
								onClick={() => actualizarProducto(item.id, item.quantity - 1)}
							>
								-
							</button>
							<span>{item.quantity}</span>
							<button
								onClick={() => actualizarProducto(item.id, item.quantity + 1)}
							>
								+
							</button>
						</div>
					</div>
					<button
						className="remove-item"
						onClick={() => borrarProducto(item.id)}
					>
						<FontAwesomeIcon icon={faTrash} />
					</button>
				</div>
			))}
			<div className="cart-total">
				<h3>Total: {carroTotal().toFixed(2)}€</h3>
				{/* Botón para realizar la compra */}
				<button className="buy-button" onClick={handleBuy}>
					Comprar
				</button>
			</div>
		</div>
	);
};

export default CartComponent;
