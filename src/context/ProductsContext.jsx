import { createContext, useEffect, useState } from "react";

//crear el contexto
export const ProductContext = createContext(false);

//crear el proveedor
export function ProductProvider({ children }) {
  const [boardgames, setBoardgames] = useState([]);

  useEffect(() => {
    fetch("https://668c01a80b61b8d23b0c1463.mockapi.io/games")
      .then((response) => response.json())
      .then((data) => setBoardgames(data))
      .catch((error) => console.log(error));
  }, []);

  /*  const agregarProducto = (productoNuevo) => {
    //aqui codigo
  }

  const eliminarProducto = (id) => {
    //aqui codigo
  } */

  return (
    <ProductContext.Provider value={[boardgames, setBoardgames]}>
      {children}
    </ProductContext.Provider>
  );
}
