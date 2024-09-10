import { useContext } from "react";
import BoardgameCard from "./BoardgameCard";
import { ProductContext } from "../context/ProductsContext"; // Importar el contexto

export default function ListBoardgames() {
  const [boardgames] = useContext(ProductContext); // Obtener el estado del contexto

  return (
    <section>
      <h2>Nuevos Lanzamientos</h2>
      <div className="boardgames-container">
        {boardgames.length > 0 ? (
          boardgames.map((game) => (
            <BoardgameCard key={game.id} boardgame={game} />
          ))
        ) : (
          <p>No boardgames found</p>
        )}
      </div>
    </section>
  );
}
