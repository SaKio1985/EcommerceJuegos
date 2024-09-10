import "./BoardgameCard.css";
import { faChild, faClock, faUsers } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./ListBoardgames.css";

export default function BoardgameCard({ boardgame }) {
	const { image, title, players, duration, age, availability, author, price } =
		boardgame;
	return (
		<article className="card">
			<div className="card-image-container">
				<img src={image} alt={title} className="card-image" />
			</div>
			<div className="card-content">
				<div className="card-icons">
					<div className="icon-item">
						<FontAwesomeIcon icon={faUsers} />
						<span>{players}</span>
					</div>
					<div className="icon-item">
						<FontAwesomeIcon icon={faClock} />
						<span>{duration}</span>
					</div>
					<div className="icon-item">
						<FontAwesomeIcon icon={faChild} />
						<span>{age}+</span>
					</div>
				</div>
				<h2 className="card-title">{title}</h2>
				<p className="card-availability">{availability}</p>
				<p className="card-author">Autor: {author}</p>
				<p className="card-price">PVPr: {price}€</p>
				<button type="button" className="card-button">
					Más información
				</button>
			</div>
		</article>
	);
}
