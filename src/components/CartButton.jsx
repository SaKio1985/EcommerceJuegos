import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const CartButton = ({ itemCount = 0 }) => {
	return (
		<button
			className="text-current bg-transparent hover:bg-gray-200 dark:hover:bg-gray-700 font-bold py-2 px-4 rounded-full flex items-center transition-colors duration-200"
			aria-label="Carrito de compras"
		>
			<FontAwesomeIcon icon={faShoppingCart} className="mr-2" />
			<span>Carrito</span>
			{itemCount > 0 && (
				<span className="bg-red-500 text-white rounded-full px-2 py-1 text-xs font-bold ml-1">
					{itemCount}
				</span>
			)}
		</button>
	);
};

export default CartButton;
