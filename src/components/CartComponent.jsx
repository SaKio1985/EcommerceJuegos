import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faMinus, faPlus, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "./CartComponent.css";

const CartComponent = () => {
	const { cart, actualizarProducto, borrarProducto, carroTotal, setCart } =
		useContext(CartContext);

	// Función que se ejecuta cuando se presiona el botón de compra
	const handleBuy = () => {
		// Simula la acción de pasar a la pasarela de pago
		alert("¡Gracias por tu compra! Estás siendo redirigido a la pasarela de pago...");
		setCart([]); // Limpiar el carrito
	};

	// Si el carrito está vacío
	if (cart.length === 0) {
		return (
			<div className="cart-container">
				<div className="empty-cart">
					<FontAwesomeIcon icon={faShoppingCart} className="empty-cart-icon" />
					<h3>Tu carrito está vacío</h3>
					<p>¡Descubre nuestros increíbles juegos de mesa y añade algunos a tu carrito!</p>
					<Link to="/" className="continue-shopping">
						Continuar comprando
					</Link>
				</div>
			</div>
		);
	}

	return (
		<div className="cart-container">
			<div className="cart-header">
				<h1 className="cart-title">Tu Carrito</h1>
				<p className="cart-subtitle">
					{cart.length} {cart.length === 1 ? 'producto' : 'productos'} en tu carrito
				</p>
			</div>

			<div className="cart-content">
				<div className="cart-items-section">
					{cart.map((item) => (
						<div key={item.id} className="cart-item">
							<img src={item.image} alt={item.title} className="cart-item-image" />
							<div className="cart-item-info">
								<h3 className="cart-item-title">{item.title}</h3>
								<p className="cart-item-price">{item.price}€ cada uno</p>
								<div className="cart-item-controls">
									<div className="quantity-control">
										<button
											onClick={() => actualizarProducto(item.id, item.quantity - 1)}
											disabled={item.quantity <= 1}
										>
											<FontAwesomeIcon icon={faMinus} />
										</button>
										<span>{item.quantity}</span>
										<button
											onClick={() => actualizarProducto(item.id, item.quantity + 1)}
										>
											<FontAwesomeIcon icon={faPlus} />
										</button>
									</div>
									<button
										className="remove-item"
										onClick={() => borrarProducto(item.id)}
										title="Eliminar producto"
									>
										<FontAwesomeIcon icon={faTrash} />
									</button>
								</div>
							</div>
						</div>
					))}
				</div>

				<div className="cart-summary">
					<h2 className="summary-title">Resumen del pedido</h2>
					
					<div className="summary-row">
						<span>Subtotal:</span>
						<span>{carroTotal().toFixed(2)}€</span>
					</div>
					
					<div className="summary-row">
						<span>Envío:</span>
						<span>{carroTotal() >= 30 ? 'Gratis' : '4.95€'}</span>
					</div>
					
					<div className="summary-row">
						<span>Total:</span>
						<span>{(carroTotal() + (carroTotal() >= 30 ? 0 : 4.95)).toFixed(2)}€</span>
					</div>

					{carroTotal() < 30 && (
						<p style={{ 
							fontSize: '0.9rem', 
							color: '#059669', 
							textAlign: 'center', 
							marginTop: '1rem',
							fontWeight: '500'
						}}>
							¡Añade {(30 - carroTotal()).toFixed(2)}€ más para envío gratuito!
						</p>
					)}

					<button className="buy-button" onClick={handleBuy}>
						Proceder al pago
					</button>
					
					<Link to="/" style={{
						display: 'block',
						textAlign: 'center',
						marginTop: '1rem',
						color: '#6b7280',
						textDecoration: 'none',
						fontSize: '0.9rem'
					}}>
						← Continuar comprando
					</Link>
				</div>
			</div>
		</div>
	);
};

export default CartComponent;