import React from "react";
import "./NewsComponent.css";

const NewsItem = ({ title, description, image }) => (
	<div className="news-card">
		<img
			src={
				image ||
				"https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg"
			}
			alt={title}
			className="news-card-image"
		/>
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
			title: "Diario de diseño: Ironwood",
			description:
				"Queridos jugadores: Somos Maël Brunet y Julien Chaput y queremos compartir con vosotros un poco sobre la trayectoria de Ironwood y la lógica detrás del diseño. Además, nos gustaría conocer vuestra opinión.",
			image:
				"https://www.malditogames.com/wp-content/uploads/2025/03/Noticias-miniatura-ironwood-400x252.jpg",
		},
		{
			id: 2,
			title: "Anuncio After Us",
			description:
				"AFTER US 2083. La humanidad se extinguió hace varias décadas. En la Tierra solo quedan algunos restos de su legado. Con el tiempo, la naturaleza ha reclamado el planeta. Mientras el mundo vuelve a la vida, nuevas especies emergen y evolucionan.",
			image:
				"https://www.malditogames.com/wp-content/uploads/Noticias_miniatura_AfterUs-400x252.jpg",
		},
		{
			id: 3,
			title: "II HOBBITJORNADAS",
			description:
				"El próximo 1 de abril estaremos presentes en las «II HOBBITJORNADAS» unas jornadas organizadas por la asociación «Queremos Jugar» y el canal especializado en juegos de mesa «El agujero hobbit».",
			image:
				"https://www.malditogames.com/wp-content/uploads/Noticias_miniatura_IIJobbitJornadas-400x252.jpg",
		},
		{
			id: 4,
			title: "I Concurso de camisetas de Maldito Games",
			description:
				"CONCURSO DE CAMISETAS DE MALDITO GAMES El I Concurso de diseño de camisetas de Maldito Games se desarrollará en el marco de las actividades propuestas para el evento InterOcio 2023, que se celebrará los días 24, 25 y 26 de marzo.",
			image:
				"https://www.malditogames.com/wp-content/uploads/Portadas_Noticias_ConcursoCamiseta-400x252.jpg",
		},
		{
			id: 5,
			title: "Noticia InterOcio 2023",
			description:
				"INTEROCIO 2023 Los días 24, 25 y 26 de marzo estaremos en el pabellón 9 de IFEMA disfrutando con toda la comunidad lúdica de una nueva edición de InterOcio. En esta ocasión tendremos una zona con demostraciones y explicaciones.",
			image:
				"https://www.malditogames.com/wp-content/uploads/Noticias_miniatura_InterOcio-400x252.jpg",
		},
		{
			id: 6,
			title: "Café Lviv Carta promocional",
			description:
				"En las próximas semanas estará disponible en tiendas la carta promocional Lviv, para Café. Una carta desarrollada por nuestro partner en Ucrania, donde se representan dos históricos cafés de la ciudad, Kopalnya Kavy (1675) y Svit Kavy (1760).",
			image:
				"https://www.malditogames.com/wp-content/uploads/Noticias_miniatura_CafeLviv-400x252.jpg",
		},
	];

	return (
		<div className="news-container">
			<div className="news-header">
				<img
					src="https://www.malditogames.com/wp-content/uploads/Banner_Titulo_NoticiasWeb-1200x285.jpg"
					alt="Noticias"
					className="news-title"
				/>
			</div>
			<div className="news-grid">
				{newsItems.map((item) => (
					<NewsItem key={item.id} {...item} />
				))}
			</div>
		</div>
	);
}
