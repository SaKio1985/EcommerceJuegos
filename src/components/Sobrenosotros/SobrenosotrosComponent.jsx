import React from "react";
import "./SobreNosotros.css";
import { Link } from "react-router-dom";

const SobreNosotrosComponent = () => {
	return (
		<div className="about-container">
			<div className="about-header">
				<h1 className="about-title">Sobre Nosotros</h1>
				<p className="about-subtitle">
					Conoce la historia de Maldito Games, la editorial española líder 
					en juegos de mesa de calidad desde 2015.
				</p>
			</div>

			<div className="about-content">
				<section className="about-section">
					<h2 className="section-title">
						<span className="section-flag flag-spain"></span>
						Nuestra Historia
					</h2>
					
					<p className="section-paragraph">
						<span className="highlight-text">Maldito Games</span> es una editorial española 
						dedicada a la localización y publicación de juegos de mesa de la más alta calidad.
					</p>

					<p className="section-paragraph">
						Nacimos en <span className="highlight-text">2015</span> con el propósito de publicar 
						títulos nunca antes disponibles en nuestro idioma y desde entonces trabajamos en 
						editar juegos con la mayor calidad y atención al detalle, que es nuestro principal 
						objetivo y seña de identidad.
					</p>

					<div className="stats-grid">
						<div className="stat-card">
							<span className="stat-number">300+</span>
							<span className="stat-label">Títulos publicados</span>
						</div>
						<div className="stat-card">
							<span className="stat-number">2015</span>
							<span className="stat-label">Año de fundación</span>
						</div>
						<div className="stat-card">
							<span className="stat-number">100%</span>
							<span className="stat-label">Calidad garantizada</span>
						</div>
					</div>

					<p className="section-paragraph">
						En la actualidad contamos con más de 300 títulos cuidadosamente seleccionados 
						para ofrecer un catálogo diversificado y amplio para todos los públicos.
					</p>

					<div className="featured-games">
						<span className="game-tag">Terraforming Mars</span>
						<span className="game-tag">Brass Birmingham</span>
						<span className="game-tag">Tainted Grail</span>
						<span className="game-tag">Anachrony</span>
						<span className="game-tag">Wingspan</span>
						<span className="game-tag">Cubirds</span>
						<span className="game-tag">Dice Hospital</span>
					</div>

					<p className="section-paragraph">
						Estos títulos se han convertido en juegos de cabecera para nosotros y los 
						aficionados, reflejando el futuro prometedor de nuestros próximos lanzamientos.
					</p>

					<p className="section-paragraph">
						Puedes seguir nuestras novedades desde nuestra web y medios sociales. En{" "}
						<Link to="/news" className="newsletter-link">
							nuestra sección de noticias
						</Link>{" "}
						puedes estar al tanto de nuestras últimas novedades gracias a nuestro 
						newsletter mensual.
					</p>
				</section>

				<section className="about-section">
					<h2 className="section-title">
						<span className="section-flag flag-uk"></span>
						About Us
					</h2>
					
					<p className="section-paragraph">
						<span className="highlight-text">Maldito Games</span> is a Spanish publisher 
						dedicated to the edition and localization of boardgames.
					</p>

					<p className="section-paragraph">
						Founded in <span className="highlight-text">2015</span> with the goal of 
						publishing titles that had never been translated to our language, we have 
						since been working to ensure our boardgames are produced with the highest 
						quality and attention to detail, which is our main goal and identity.
					</p>

					<p className="section-paragraph">
						Nowadays, we have more than 300 carefully-selected titles, to offer a 
						diverse and wide catalog for everyone. Some of our most known titles like{" "}
						<span className="highlight-text">Terraforming Mars</span>,{" "}
						<span className="highlight-text">Brass Birmingham</span>,{" "}
						<span className="highlight-text">Tainted Grail</span> or{" "}
						<span className="highlight-text">Anachrony</span>, or our bestselling 
						introductory games like <span className="highlight-text">Wingspan</span>,{" "}
						<span className="highlight-text">Cubirds</span> or{" "}
						<span className="highlight-text">Dice Hospital</span>, are considered by 
						us and our customers as core components of their game shelves.
					</p>

					<p className="section-paragraph">
						They are just a glimpse of Maldito Games' next releases and bright future, 
						which you can follow through our social media. Following{" "}
						<Link to="/news" className="newsletter-link">
							this link
						</Link>{" "}
						you can keep updated of our news through our monthly newsletter (in Spanish).
					</p>
				</section>
			</div>
		</div>
	);
};

export default SobreNosotrosComponent;