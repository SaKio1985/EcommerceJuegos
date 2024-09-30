import React, { useEffect, useState } from "react";
import ButtonComponent from "./ButtonComponent";
import CartButton from "./CartButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faTimes } from "@fortawesome/free-solid-svg-icons";
import "./NavComponent.css";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { useContext } from "react";

export default function NavComponent() {
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [cartItemCount, setCartItemCount] = useState(0); // Estado para el contador del carrito

  const { cart } = useContext(CartContext);

  useEffect(() => {
    setCartItemCount(cart.length);
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
              {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
              <button onClick={toggleSearch} className="search-close">
                <FontAwesomeIcon icon={faTimes} />
              </button>
            </div>
          ) : (
            // biome-ignore lint/a11y/useButtonType: <explanation>
            <button onClick={toggleSearch} className="search-button">
              <FontAwesomeIcon icon={faSearch} />
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}
