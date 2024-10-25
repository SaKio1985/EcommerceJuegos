import {
	faMoon,
	faSearch,
	faSun,
	faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import ButtonComponent from "./ButtonComponent";
import CartButton from "./CartButton";
import "./NavComponent.css";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { useTheme } from "./UseTheme";

export default function NavComponent() {
	const [isSearchVisible, setIsSearchVisible] = useState(false);
	const [cartItemCount, setCartItemCount] = useState(0);
	const [theme, toggleTheme] = useTheme();

	const { cart } = useContext(CartContext);

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		setCartItemCount(cart.length);

		// Asegúrate de que todo el documento recibe el tema
		document.documentElement.setAttribute("data-theme", theme);
		localStorage.setItem("theme", theme);
	}, [cart]);

	const toggleSearch = () => {
		setIsSearchVisible(!isSearchVisible);
	};

	return (
		<nav className="navbar">
			<div className="navbar-container">
				<section className="navbar-logo-section">
					<img
						src="https://www.malditogames.com/wp-content/uploads/2017/09/maldito-horizontal222.png"
						alt="logo"
						className="navbar-logo"
					/>
				</section>
				{!isSearchVisible && (
					<div className="navbar-buttons">
						<Link to="/">
							<ButtonComponent
								texto="Inicio"
								ancho={100}
								customClass="button-inicio"
								showIcon={false}
							/>
						</Link>
						<Link to="/news">
							<ButtonComponent
								texto="Noticias"
								ancho={100}
								customClass="button-noticias"
								showIcon={false}
							/>
						</Link>
						<Link to="/sobrenosotros">
							<ButtonComponent
								texto="Sobre nosotros"
								ancho={200}
								customClass="button-sobrenosotros"
								showIcon={false}
							/>
						</Link>
						<Link to="/contact">
							<ButtonComponent
								texto="Contacto"
								ancho={100}
								customClass="button-contacto"
								showIcon={false}
							/>
						</Link>
						<Link to="/cart">
							<CartButton itemCount={cartItemCount} />
						</Link>

						{/* Iconos para cambiar el tema */}
						<button onClick={toggleTheme} className="theme-toggle-button">
							<FontAwesomeIcon icon={theme === "light" ? faMoon : faSun} />
						</button>
					</div>
				)}
				<div className="navbar-search">
					{isSearchVisible ? (
						<div className="search-bar">
							<input
								type="text"
								placeholder="Buscar..."
								className="search-input"
							/>
							<button onClick={toggleSearch} className="search-close">
								<FontAwesomeIcon icon={faTimes} />
							</button>
						</div>
					) : (
						<button onClick={toggleSearch} className="search-button">
							<FontAwesomeIcon icon={faSearch} />
						</button>
					)}
				</div>
			</div>
		</nav>
	);
}
