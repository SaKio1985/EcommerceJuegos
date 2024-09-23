import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const CartButton = ({ itemCount = 1 }) => {
	return (
		<>
			{/* biome-ignore lint/a11y/useButtonType: <explanation> */}
			<button
				className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full flex items-center"
				aria-label="Carrito de compras"
			>
				<FontAwesomeIcon icon={faShoppingCart} className="mr-2" />
				<span>Carrito </span>
				{itemCount > 0 && (
					<span className="bg-red-500 text-white rounded-full px-2 py-1 text-xs font-bold ml-1">
						({itemCount})
					</span>
				)}
			</button>
		</>
	);
};

export default CartButton;
