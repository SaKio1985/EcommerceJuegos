import { useEffect, useState } from "react";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../../context/ProductsContext";
import { CartContext } from "../../context/CartContext";

export default function SingleComponent() {
  const { id } = useParams();

  const [products, setProducts] = useContext(ProductContext);

  const [cart, setCart, agregarProducto] = useContext(CartContext);

  const [actualProduct, setActualProduct] = useState({});

  useEffect(() => {
    const miProd = products.find((prod) => prod.id === id);
    console.log(miProd, id);
    setActualProduct(miProd);
  }, [actualProduct]);
  const handleClick = () => {
    agregarProducto(actualProduct);
    console.log("pulsaste el boton");
    console.log(cart);
  };

  return (
    <>
      <h1>Detalles del producto</h1>
      <p>ID:{actualProduct.id}</p>
      <h3>Nombre:{actualProduct.title}</h3>
      <img src={actualProduct.image} alt={actualProduct.title} />
      <p>Descripcion:{actualProduct.description}</p>
      <p>Categoria:{actualProduct.category}</p>
      <p>Precio:{actualProduct.price}</p>
      {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
      <button onClick={handleClick}>Agregar al carrito</button>
    </>
  );
}
