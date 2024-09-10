import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./ButtonComponent.css";

export default function ButtonComponent({
	texto,
	ancho,
	color,
	forma,
	showIcon = true,
	customClass = "", // Añadido para clases personalizadas
}) {
	const handleClick = () => {
		alert(`Click en ${texto} ✅`);
	};

	return (
		<>
			<button
				type="button" // Añadir esta línea
				onClick={handleClick}
				className={`button-component ${customClass}`} // Usar la clase personalizada
				style={{ width: ancho }}
			>
				{texto}
				{color && ` ${color}`}
				{forma && ` ${forma}`}
				{showIcon && <FontAwesomeIcon icon={faCheck} />}
			</button>
		</>
	);
}
