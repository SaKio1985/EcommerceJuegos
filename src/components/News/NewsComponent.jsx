import React from "react";
import "./NewsComponent.css";

const NewsItem = ({ title, description, image }) => (
	<div className="news-card">
		<img src={image} alt={title} className="news-card-image" />
		<div className="news-card-content">
			<h2 className="news-card-title">{title}</h2>
			<p className="news-card-description">{description}</p>
		</div>
	</div>
);

export default function NewsComponent() {
	const newsItems = [
		{
			id: 1,
			title: "After Us",
			description:
				"AFTER US 2083. La humanidad se extinguió hace varias décadas. En la Tierra solo quedan algunos restos de su legado. Con el tiempo, la naturaleza ha reclamado el planeta. Mientras el mundo vuelve [...]",
			image: "/path/to/after-us-image.jpg",
		},
		{
			id: 2,
			title: "II HOBBITJORNADAS",
			description:
				"II HOBBIT JORNADAS El próximo 1 de abril estaremos presentes en las «II HOBBITJORNADAS» unas jornadas organizadas por la asociación «Queremos Jugar» y el canal especializado en juegos de mesa «El agujero [...]",
			image: "/path/to/hobbit-image.jpg",
		},
		// Add more news items here
	];

	return (
		<section className="news-section">
			<div className="news-header">
				<h1 className="news-title">NOTICIAS</h1>
			</div>
			<div className="news-grid">
				{newsItems.map((item) => (
					<NewsItem key={item.id} {...item} />
				))}
			</div>
		</section>
	);
}
