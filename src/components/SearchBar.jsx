import React, { useState } from "react";

function SearchBar({ onSearch }) {
	const [searchTerm, setSearchTerm] = useState("");

	const handleInputChange = (event) => {
		const newTerm = event.target.value;
		setSearchTerm(newTerm);
		onSearch(newTerm); // Llamamos a onSearch cada vez que cambia el input
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		onSearch(searchTerm);
	};

	return (
		<form onSubmit={handleSubmit} className="search-bar">
			<input
				type="text"
				placeholder="Buscar juegos..."
				value={searchTerm}
				onChange={handleInputChange}
				className="search-input"
			/>
			<button type="submit" className="search-button">
				Buscar
			</button>
		</form>
	);
}

export default SearchBar;
