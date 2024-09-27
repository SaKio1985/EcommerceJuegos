import { useEffect, useState } from "react";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../../context/ProductsContext";
import { CartContext } from "../../context/CartContext";
import { faChild, faClock, faUsers } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SingleComponent() {
	const { id } = useParams();

	const [products, setProducts] = useContext(ProductContext);
	const { cart, setCart, agregarProducto } = useContext(CartContext);

	const [actualProduct, setActualProduct] = useState({});

	useEffect(() => {
		const miProd = products.find((prod) => prod.id === id);
		setActualProduct(miProd); // Establecer el producto actual
	}, [id, products]);

	const handleClick = () => {
		agregarProducto(actualProduct);
		console.log("pulsaste el boton");
		console.log(cart);
	};

	return (
		<>
			<h1>Detalles del producto</h1>
			<h3>Nombre: {actualProduct.title}</h3>
			<div className="card-icons">
				<div className="icon-item">
					<FontAwesomeIcon icon={faUsers} />
					<span>{actualProduct.players}</span> {/* Corregido */}
				</div>
				<div className="icon-item">
					<FontAwesomeIcon icon={faClock} />
					<span>{actualProduct.duration}</span> {/* Corregido */}
				</div>
				<div className="icon-item">
					<FontAwesomeIcon icon={faChild} />
					<span>{actualProduct.age}+</span> {/* Corregido */}
				</div>
			</div>
			<img src={actualProduct.image} alt={actualProduct.title} />
			<p>Descripcion: {actualProduct.description}</p>
			<p>Autor o autores: {actualProduct.aut}</p>
			<p>Precio: {actualProduct.price}€</p>
			<button onClick={handleClick}>Agregar al carrito</button>
		</>
	);
}
