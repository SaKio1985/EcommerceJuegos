import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faNewspaper, faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import "./NewsComponent.css";

const NewsItem = ({ title, description, image, date, category, tags, isNew }) => (
	<article className="news-card">
		<div className="news-card-image-container">
			<img src={image} alt={title} className="news-card-image" />
			{isNew && <span className="news-badge">Nuevo</span>}
		</div>
		<div className="news-card-content">
			<div className="news-card-date">
				<FontAwesomeIcon icon={faCalendarAlt} style={{ marginRight: '0.5rem' }} />
				{date}
			</div>
			<h2 className="news-card-title">{title}</h2>
			<p className="news-card-description">{description}</p>
			<div className="news-card-footer">
				<div className="news-tags">
					{tags.map((tag, index) => (
						<span key={index} className="news-tag">{tag}</span>
					))}
				</div>
				<button className="read-more-btn">
					Leer más
				</button>
			</div>
		</div>
	</article>
);

export default function NewsComponent() {
	const newsItems = [
		{
			id: 1,
			title: "After Us - El Futuro Post-Apocalíptico",
			description: "AFTER US 2083. La humanidad se extinguió hace varias décadas. En la Tierra solo quedan algunos restos de su legado. Con el tiempo, la naturaleza ha reclamado el planeta. Mientras el mundo vuelve a la vida, nuevas especies emergen...",
			image: "https://www.malditogames.com/wp-content/uploads/2024/08/after-us-banner-web-1200x396.jpg",
			date: "15 de Noviembre, 2024",
			category: "Lanzamientos",
			tags: ["Estrategia", "Post-apocalíptico"],
			isNew: true
		},
		{
			id: 2,
			title: "II HOBBITJORNADAS - Evento Especial",
			description: "El próximo 1 de abril estaremos presentes en las «II HOBBITJORNADAS» unas jornadas organizadas por la asociación «Queremos Jugar» y el canal especializado en juegos de mesa «El agujero hobbit». Un evento imperdible para todos los amantes de los juegos de mesa.",
			image: "https://www.malditogames.com/wp-content/uploads/2024/03/hobbit-jornadas-banner.jpg",
			date: "1 de Abril, 2024",
			category: "Eventos",
			tags: ["Evento", "Comunidad"],
			isNew: false
		},
		{
			id: 3,
			title: "Septima - Magia y Estrategia",
			description: "Sumérgete en un mundo de magia y misterio con Septima, el nuevo juego de estrategia que combina elementos de construcción de mazos con mecánicas innovadoras. Una experiencia única para 1-4 jugadores.",
			image: "https://www.malditogames.com/wp-content/uploads/banner-septima-1200x396.jpg",
			date: "20 de Octubre, 2024",
			category: "Lanzamientos",
			tags: ["Magia", "Estrategia", "Mazos"],
			isNew: true
		},
		{
			id: 4,
			title: "Tichu - El Clásico Renovado",
			description: "Redescubre el clásico juego de cartas Tichu con una nueva edición mejorada. Perfecto para grupos de 4 jugadores que buscan diversión y estrategia en cada partida.",
			image: "https://www.malditogames.com/wp-content/uploads/2024/08/tichu-banner-web-1200x396.jpg",
			date: "5 de Septiembre, 2024",
			category: "Reediciones",
			tags: ["Cartas", "Clásico"],
			isNew: false
		},
		{
			id: 5,
			title: "Valle de la Eternidad - Aventura Épica",
			description: "Embárcate en una aventura épica a través del Valle de la Eternidad. Un juego cooperativo que desafiará a tu grupo a trabajar juntos para superar obstáculos y descubrir secretos ancestrales.",
			image: "https://www.malditogames.com/wp-content/uploads/valle-eternindad-banner-1200x396.jpg",
			date: "12 de Agosto, 2024",
			category: "Cooperativos",
			tags: ["Cooperativo", "Aventura"],
			isNew: false
		},
		{
			id: 6,
			title: "Apiario - Gestión de Recursos",
			description: "Conviértete en un apicultor experto en Apiario, un juego de gestión de recursos donde deberás cuidar tus colmenas y producir la mejor miel del valle.",
			image: "https://www.malditogames.com/wp-content/uploads/apiario-banner-web-1200x396.jpg",
			date: "28 de Julio, 2024",
			category: "Gestión",
			tags: ["Gestión", "Recursos"],
			isNew: false
		}
	];

	return (
		<div className="news-container">
			<div className="news-header">
				<h1 className="news-title">Noticias</h1>
				<p className="news-subtitle">
					Mantente al día con las últimas novedades, lanzamientos y eventos 
					de Maldito Games. Descubre los juegos que están revolucionando el mundo de los juegos de mesa.
				</p>
			</div>
			
			{newsItems.length > 0 ? (
				<div className="news-grid">
					{newsItems.map((item) => (
						<NewsItem key={item.id} {...item} />
					))}
				</div>
			) : (
				<div className="no-news">
					<FontAwesomeIcon icon={faNewspaper} className="no-news-icon" />
					<h3>No hay noticias disponibles</h3>
					<p>Vuelve pronto para conocer las últimas novedades</p>
				</div>
			)}
		</div>
	);
}