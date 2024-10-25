import React from "react";
import "./SobreNosotros.css"; // Asumimos que crearás un archivo CSS para los estilos
import { Link } from "react-router-dom";

const SobreNosotrosComponent = () => {
	return (
		<div className="sobre-nosotros-container">
			<h1>Sobre nosotros</h1>
			<hr className="section-divider" />

			<section className="spanish-section">
				<p>
					Maldito Games es una editorial española dedicada a la localización y
					publicación de juegos de mesa.
				</p>

				<p>
					Nacimos en 2015 con el propósito de publicar títulos nunca antes
					disponibles en nuestro idioma y desde entonces trabajamos en editar
					juegos con la mayor calidad y atención al detalle, que es nuestro
					principal objetivo y seña de identidad.
				</p>

				<p>
					En la actualidad contamos con más de 300 títulos cuidadosamente
					seleccionados para ofrecer un catálogo diversificado y amplio para
					todos los públicos. Algunos de nuestros títulos más conocidos como{" "}
					<strong>Terraforming Mars</strong>, <strong>Brass Birmingham</strong>,{" "}
					<strong>Tainted Grail</strong> o <strong>Anachrony</strong>, o
					fabulosos juegos introductorios como <strong>Wingspan</strong>,{" "}
					<strong>Cubirds</strong> o <strong>Dice Hospital</strong>, se han
					convertido en títulos de cabecera para nosotros y los aficionados.
				</p>

				<p>
					Estos son un reflejo del futuro prometedor de nuestros próximos
					lanzamientos, que podrás seguir desde nuestra web y medios sociales.
					En{" "}
					<Link to="/news" className="newsletter-link">
						este enlace
					</Link>{" "}
					puedes estar al tanto de nuestras últimas noticias gracias a nuestro
					newsletter mensual.
				</p>
			</section>

			<hr className="section-divider" />

			<section className="english-section">
				<p>
					Maldito Games is a Spanish publisher dedicated to the edition and
					localization of boardgames.
				</p>

				<p>
					Founded in 2015 with the goal of publishing titles that had never been
					translated to our language, we have since been working to ensure our
					boardgames are produced with the highest quality and attention to
					detail, which is our main goal and identity.
				</p>

				<p>
					Nowadays, we have more than 300 carefully-selected titles, to offer a
					diverse and wide catalog for everyone. Some of our most known titles
					like <strong>Terraforming Mars</strong>,{" "}
					<strong>Brass Birmingham</strong>, <strong>Tainted Grail</strong> or{" "}
					<strong>Anachrony</strong>, or our bestselling introductory games like{" "}
					<strong>Wingspan</strong>, <strong>Cubirds</strong> or{" "}
					<strong>Dice Hospital</strong>, are considered by us and our customers
					as core components of their game shelves.
				</p>

				<p>
					They are just a glimpse of Maldito Games' next releases and bright
					future, which you can follow through our social media. Following{" "}
					<Link to="/news" className="newsletter-link">
						this link
					</Link>{" "}
					you can keep updated of our news through our monthly newsletter (in
					Spanish).
				</p>
			</section>
		</div>
	);
};

export default SobreNosotrosComponent;
