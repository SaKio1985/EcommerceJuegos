import { createContext, useState } from "react";

//crear el contexto
export const CartContext = createContext(false);

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const agregarProducto = (productoNuevo) => {
    // No se puede realizar push, se necesita usar setCart
    setCart([...cart, productoNuevo]);
  };
  const carroTotal = () => {
    let total = cart.reduce((acumulador, item) => acumulador + item.price, 0);
    return total;
  };

  return (
    <CartContext.Provider
      value={{ cart, setCart, agregarProducto, carroTotal }}
    >
      {children}
    </CartContext.Provider>
  );
}
