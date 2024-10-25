import { useContext, useState, useEffect } from "react";
import BoardgameCard from "./BoardgameCard";
import { ProductContext } from "../context/ProductsContext";
import SearchBar from "./SearchBar";

export default function ListBoardgames() {
	const [boardgames] = useContext(ProductContext);
	const [filteredBoardgames, setFilteredBoardgames] = useState([]);
	const [searchTerm, setSearchTerm] = useState("");

	useEffect(() => {
		setFilteredBoardgames(boardgames);
	}, [boardgames]);

	const handleSearch = (term) => {
		setSearchTerm(term);
		const filtered = boardgames.filter((game) =>
			game.title.toLowerCase().includes(term.toLowerCase()),
		);
		setFilteredBoardgames(filtered);
	};

	return (
		<section>
			<h2>Nuevos Lanzamientos</h2>
			<SearchBar onSearch={handleSearch} />
			<div className="home-boardgames-container">
				{filteredBoardgames.length > 0 ? (
					filteredBoardgames.map((game) => (
						<BoardgameCard key={game.id} boardgame={game} />
					))
				) : (
					<p>
						{searchTerm
							? "No se encontraron juegos que coincidan con la búsqueda"
							: "No hay juegos disponibles"}
					</p>
				)}
			</div>
		</section>
	);
}
