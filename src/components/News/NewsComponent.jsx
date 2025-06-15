import { useState } from "react";
import "./NewsComponent.css";

const NewsItem = ({ title, description, image, date, category, slug }) => {
	const [imageError, setImageError] = useState(false);

	const formatDate = (dateString) => {
		if (!dateString) return "";
		const date = new Date(dateString);
		return date.toLocaleDateString("es-ES", {
			year: "numeric",
			month: "long",
			day: "numeric",
		});
	};

	return (
		<article className="news-card">
			<div className="news-image-container">
				{!imageError ? (
					<img
						src={image || "/placeholder.svg?height=300&width=400"}
						alt={title}
						className="news-card-image"
						onError={() => setImageError(true)}
					/>
				) : (
					<div className="news-image-placeholder">
						<div className="placeholder-content">
							<span className="placeholder-icon">🖼️</span>
							<p>Imagen no disponible</p>
						</div>
					</div>
				)}
				{category && <span className="news-category-badge">{category}</span>}
			</div>

			<div className="news-card-content">
				{date && (
					<div className="news-date">
						<span className="date-icon">📅</span>
						{formatDate(date)}
					</div>
				)}

				<h3 className="news-card-title">{title}</h3>
				<p className="news-card-description">{description}</p>

				<a href={`/noticias/${slug || "#"}`} className="news-read-more">
					Leer más
					<span className="arrow-icon">→</span>
				</a>
			</div>
		</article>
	);
};

const NewsComponent = () => {
	const [visibleNews, setVisibleNews] = useState(6);
	const [selectedCategory, setSelectedCategory] = useState("all");

	const newsItems = [
		{
			id: 1,
			title: "After Us",
			description:
				"AFTER US 2083. La humanidad se extinguió hace varias décadas. En la Tierra solo quedan algunos restos de su legado. Con el tiempo, la naturaleza ha reclamado el planeta. Mientras el mundo vuelve a la vida, tú eres uno de los últimos supervivientes que debe explorar este nuevo mundo.",
			image:
				"https://www.malditogames.com/wp-content/uploads/Noticias_miniatura_AftertheVirus-400x252.jpg",
			date: "2024-03-15",
			category: "Lanzamiento",
			slug: "after-us",
		},
		{
			id: 2,
			title: "II HOBBITJORNADAS",
			description:
				"II HOBBIT JORNADAS El próximo 1 de abril estaremos presentes en las «II HOBBITJORNADAS» unas jornadas organizadas por la asociación «Queremos Jugar» y el canal especializado en juegos de mesa «El agujero hobbit». Un evento imperdible para todos los aficionados a los juegos de mesa.",
			image:
				"https://www.malditogames.com/wp-content/uploads/Noticias_miniatura_IIJobbitJornadas-400x252.jpg",
			date: "2024-03-01",
			category: "Evento",
			slug: "hobbitjornadas",
		},
		{
			id: 3,
			title: "Terraforming Mars: Edición Deluxe",
			description:
				"Llega la nueva edición deluxe de uno de nuestros títulos más exitosos. Con componentes mejorados, nuevas ilustraciones y contenido adicional que hará las delicias de los fans del juego. Una experiencia de terraformación como nunca antes.",
			image: "/placeholder.svg?height=300&width=400",
			date: "2024-02-20",
			category: "Producto",
			slug: "terraforming-mars-deluxe",
		},
		{
			id: 4,
			title: "Wingspan: Expansión Oceánica",
			description:
				"Descubre nuevas especies de aves marinas en esta emocionante expansión de Wingspan. Incluye 95 cartas de aves únicas y nuevos tableros de hábitat oceánico que ampliarán tu experiencia de juego.",
			image: "/placeholder.svg?height=300&width=400",
			date: "2024-02-10",
			category: "Expansión",
			slug: "wingspan-oceanica",
		},
		{
			id: 5,
			title: "Convención de Juegos de Mesa 2024",
			description:
				"Te esperamos en la mayor convención de juegos de mesa del año. Ven a probar nuestros últimos lanzamientos y conoce a los diseñadores detrás de tus juegos favoritos. Habrá torneos, demostraciones y muchas sorpresas.",
			image: "/placeholder.svg?height=300&width=400",
			date: "2024-01-25",
			category: "Evento",
			slug: "convencion-2024",
		},
		{
			id: 6,
			title: "Brass Birmingham: Reimpresión Disponible",
			description:
				"Después de meses agotado, vuelve a estar disponible Brass Birmingham. Una de las joyas de la estrategia que no puede faltar en tu colección. Aprovecha esta oportunidad para conseguir tu copia.",
			image: "/placeholder.svg?height=300&width=400",
			date: "2024-01-15",
			category: "Restock",
			slug: "brass-birmingham-reimpresion",
		},
	];

	const categories = [
		"all",
		"Lanzamiento",
		"Evento",
		"Producto",
		"Expansión",
		"Restock",
	];

	const filteredNews =
		selectedCategory === "all"
			? newsItems
			: newsItems.filter((item) => item.category === selectedCategory);

	const loadMoreNews = () => {
		setVisibleNews((prev) => Math.min(prev + 3, filteredNews.length));
	};

	return (
		<section className="news-section">
			<div className="news-header">
				<div className="news-title-container">
					<h1 className="news-title">NOTICIAS</h1>
					<div className="title-underline"></div>
				</div>
				<p className="news-subtitle">
					Mantente al día con las últimas novedades, lanzamientos y eventos
				</p>
			</div>

			<div className="news-filters">
				<label htmlFor="category-filter" className="filter-label">
					Filtrar por categoría:
				</label>
				<select
					id="category-filter"
					className="category-filter"
					value={selectedCategory}
					onChange={(e) => setSelectedCategory(e.target.value)}
				>
					<option value="all">Todas las categorías</option>
					{categories.slice(1).map((category) => (
						<option key={category} value={category}>
							{category}
						</option>
					))}
				</select>
			</div>

			<div className="news-grid">
				{filteredNews.slice(0, visibleNews).map((item) => (
					<NewsItem key={item.id} {...item} />
				))}
			</div>

			{visibleNews < filteredNews.length && (
				<div className="load-more-container">
					<button onClick={loadMoreNews} className="load-more-button">
						Cargar más noticias
						<span className="arrow-icon">→</span>
					</button>
				</div>
			)}

			{filteredNews.length === 0 && (
				<div className="no-news">
					<p>No hay noticias disponibles para esta categoría.</p>
				</div>
			)}
		</section>
	);
};

export default NewsComponent;
