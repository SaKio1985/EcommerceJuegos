import "./BoardgameCard.css";
import { faChild, faClock, faUsers } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export default function BoardgameCard({ boardgame, customClass, minimal }) {
	const {
		image,
		title,
		players,
		duration,
		age,
		availability,
		author,
		price,
		id,
	} = boardgame;

	return (
		<article className={`card ${customClass}`}>
			<div className="card-image-container">
				<img src={image} alt={title} className="card-image" />
			</div>
			<div className="card-content">
				<h2 className="card-title">{title}</h2>
				{!minimal && (
					<>
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
						<p className="card-availability">{availability}</p>
						<p className="card-author">Autor: {author}</p>
						<p className="card-price">PVPr: {price}€</p>
						<button type="button" className="card-button">
							<Link to={`/boardgame/${id}`}>Más información</Link>
						</button>
					</>
				)}
			</div>
		</article>
	);
}
