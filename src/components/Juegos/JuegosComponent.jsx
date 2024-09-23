import { useContext } from "react";
import BoardgameCard from "../BoardgameCard";
import { ProductContext } from "../../context/ProductsContext"; // Importar el contexto
import "./JuegosComponent.css";

export default function JuegosComponent() {
	const [boardgames] = useContext(ProductContext); // Obtener el estado del contexto

	return (
		<section>
			<h2>Todos los Juegos</h2>
			<div className="boardgames-container">
				{boardgames.length > 0 ? (
					boardgames.map((game) => (
						<BoardgameCard
							key={game.id}
							boardgame={game}
							customClass="card-small"
							minimal={true}
						/>
					))
				) : (
					<p>No boardgames found</p>
				)}
			</div>
		</section>
	);
}
