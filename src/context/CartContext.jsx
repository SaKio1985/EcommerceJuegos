import { createContext, useState } from "react";

//crear el contexto
export const CartContext = createContext(false);

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  // Función para agregar productos y controlar duplicados
  const agregarProducto = (productoNuevo) => {
    const productoExistente = cart.find((item) => item.id === productoNuevo.id);

    if (productoExistente) {
      // Si el producto ya existe, actualizamos la cantidad
      setCart(
        cart.map((item) =>
          item.id === productoNuevo.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      // Si el producto es nuevo, lo agregamos con quantity = 1
      setCart([...cart, { ...productoNuevo, quantity: 1 }]);
    }
  };

  // Función para eliminar un producto del carrito
  const borrarProducto = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  // Función para actualizar la cantidad de un producto
  const actualizarProducto = (id, nuevaCantidad) => {
    if (nuevaCantidad === 0) {
      borrarProducto(id);
    } else {
      setCart(
        cart.map((item) =>
          item.id === id ? { ...item, quantity: nuevaCantidad } : item
        )
      );
    }
  };

  const carroTotal = () => {
    let total = cart.reduce(
      (acumulador, item) => acumulador + item.price * item.quantity,
      0
    );
    return total;
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        agregarProducto,
        borrarProducto,
        actualizarProducto,
        carroTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
