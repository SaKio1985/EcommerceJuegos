import { useEffect, useState } from "react";
import { useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { ProductContext } from "../../context/ProductsContext";
import { CartContext } from "../../context/CartContext";
import {
  faShippingFast,
  faLock,
  faHandHoldingDroplet,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./SingleComponent.css";

export default function SingleComponent() {
  const { id } = useParams();
  const [products] = useContext(ProductContext);
  const { cart, agregarProducto } = useContext(CartContext);
  const [actualProduct, setActualProduct] = useState({});

  useEffect(() => {
    const miProd = products.find((prod) => prod.id === id);
    setActualProduct(miProd);
  }, [id, products]);

  const handleClick = () => {
    agregarProducto(actualProduct);
    console.log("pulsaste el boton");
    console.log(cart);
  };

  return (
    <>
      <section className="contenedor-detalle">
        <article className="detalle">
          <img src={actualProduct.image} alt={actualProduct.title} />
        </article>
        <article className="detalle">
          <h2>{actualProduct.title}</h2>
          <p className="precio">{actualProduct.price}€</p>

          {/* Mostrar prelanzamiento si aún no está disponible */}
          {actualProduct.availability !== "Disponible" && (
            <p className="prelanzamiento">
              Prelanzamiento: Disponible el {actualProduct.releaseDate}
            </p>
          )}

          <p>Descripcion: {actualProduct.description}</p>
          <p>Autor o autores: {actualProduct.author}</p>

          <input
            value={1}
            type="number"
            className="input-numero"
            min={1}
            max={actualProduct.quantity}
          />
          <button onClick={handleClick}>Agregar al carrito</button>

          {/* Icons para Envío, Pagos, y Devoluciones */}
          <div className="extra-icons">
            <div className="icon-item">
              <FontAwesomeIcon icon={faShippingFast} />
              <span className="icon-text">
                Envíos Envío 24h, gratis para pedidos de más de 30€ (Península)
              </span>
            </div>
            <div className="icon-item">
              <FontAwesomeIcon icon={faLock} />
              <span className="icon-text">
                Pago seguro Pago seguro mediante RedSys o Transferencia bancaria
              </span>
            </div>
            <div className="icon-item">
              <FontAwesomeIcon icon={faHandHoldingDroplet} />
              <span className="icon-text">
                Devoluciones 7 días para devoluciones
              </span>
            </div>
          </div>
        </article>
      </section>
      <section className="contenedor-descripcion">
        {/* Listado de componentes de la caja */}
        <div className="components-list">
          <h5>Contenido de la caja: {actualProduct.additionalDescription}</h5>
        </div>
      </section>

      <Link to="/" className="back-link">
        ← Volver atrás
      </Link>
    </>
  );
}
