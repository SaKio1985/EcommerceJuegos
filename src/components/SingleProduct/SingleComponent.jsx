import { useEffect, useState } from "react";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../../context/ProductsContext";
import { CartContext } from "../../context/CartContext";
import { faChild, faClock, faUsers } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./SingleComponent.css"; // Importamos el CSS

export default function SingleComponent() {
	const { id } = useParams();
	const [products] = useContext(ProductContext);
	const [cart, setCart, agregarProducto] = useContext(CartContext);
	const [actualProduct, setActualProduct] = useState({});

	useEffect(() => {
		const miProd = products.find((prod) => prod.id === id);
		setActualProduct(miProd); // Establecer el producto actual
	}, [id, products]);

	const handleClick = () => {
		agregarProducto(actualProduct);
	};

	return (
		<div className="single-container">
			{/* Columna izquierda con la información del producto */}
			<div className="info">
				<h1>{actualProduct.title}</h1>
				<h3>Un juego de {actualProduct.author}</h3>

				{/* Iconos de jugadores, duración y edad */}
				<div className="card-icons">
					<div className="icon-item">
						<FontAwesomeIcon icon={faUsers} />
						<span>{actualProduct.players} jugadores</span>
					</div>
					<div className="icon-item">
						<FontAwesomeIcon icon={faClock} />
						<span>{actualProduct.duration} minutos</span>
					</div>
					<div className="icon-item">
						<FontAwesomeIcon icon={faChild} />
						<span>{actualProduct.age}+ años</span>
					</div>
				</div>

				{/* Descripción del producto */}
				<p className="description">{actualProduct.description}</p>

				{/* Precio del producto */}
				<p className="price">Precio: {actualProduct.price}€</p>
			</div>

			{/* Columna derecha con la imagen del producto */}
			<div className="image">
				<img src={actualProduct.image} alt={actualProduct.title} />
				<button className="add-to-cart" onClick={handleClick}>
					Agregar al carrito
				</button>
			</div>
		</div>
	);
}
