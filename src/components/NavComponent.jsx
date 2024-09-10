import React, { useState } from "react";
import ButtonComponent from "./ButtonComponent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faTimes } from "@fortawesome/free-solid-svg-icons";
import "./NavComponent.css";
import { Link } from "react-router-dom";

export default function NavComponent() {
  const [isSearchVisible, setIsSearchVisible] = useState(false);

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
            <Link to="/juegos">
              <ButtonComponent
                texto="Juegos"
                ancho={100}
                customClass="button-juegos"
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
            <Link to="/tienda">
              <ButtonComponent
                texto="Tienda"
                ancho={100}
                customClass="button-tienda"
                showIcon={false}
              />
            </Link>
            <Link to="/portugues">
              <ButtonComponent
                texto="Portugues"
                ancho={120}
                customClass="button-portugues"
                showIcon={false}
              />
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
