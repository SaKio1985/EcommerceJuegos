import { createContext, useState } from "react";

//crear el contexto
export const CartContext = createContext(false);

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const agregarProducto = (productoNuevo) => {
    // No se puede realizar push, se necesita usar setCart
    setCart([...cart, productoNuevo]);
  };

  return (
    <CartContext.Provider value={[cart, setCart, agregarProducto]}>
      {children}
    </CartContext.Provider>
  );
}
