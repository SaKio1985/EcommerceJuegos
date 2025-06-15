import "./SobreNosotros.css";

const SobreNosotrosComponent = () => {
  const featuredGames = [
    "Terraforming Mars",
    "Brass Birmingham",
    "Tainted Grail",
    "Anachrony",
    "Wingspan",
    "Cubirds",
    "Dice Hospital",
  ];

  const stats = [
    { icon: "📅", label: "Fundada en", value: "2015" },
    { icon: "🎲", label: "Títulos publicados", value: "300+" },
    { icon: "🏆", label: "Años de experiencia", value: "9+" },
  ];

  return (
    <div className="sobre-nosotros-container">
      <div className="about-header">
        <h1 className="about-title">Sobre Nosotros</h1>
        <p className="about-subtitle">
          Editorial española dedicada a la localización y publicación de juegos
          de mesa
        </p>
      </div>

      <div className="stats-grid">
        {stats.map((stat, index) => (
          <div key={index} className="stat-card">
            <div className="stat-icon">{stat.icon}</div>
            <div className="stat-value">{stat.value}</div>
            <div className="stat-label">{stat.label}</div>
          </div>
        ))}
      </div>

      <div className="content-sections">
        <section className="content-section spanish-section">
          <div className="section-header">
            <span className="language-badge spanish">🇪🇸 Español</span>
          </div>

          <div className="section-content">
            <p className="intro-text">
              <strong className="brand-name">Maldito Games</strong> es una
              editorial española dedicada a la localización y publicación de
              juegos de mesa.
            </p>

            <p>
              Nacimos en <strong className="highlight">2015</strong> con el
              propósito de publicar títulos nunca antes disponibles en nuestro
              idioma y desde entonces trabajamos en editar juegos con la mayor
              calidad y atención al detalle, que es nuestro principal objetivo y
              seña de identidad.
            </p>

            <p>
              En la actualidad contamos con más de{" "}
              <strong className="highlight">300 títulos</strong> cuidadosamente
              seleccionados para ofrecer un catálogo diversificado y amplio para
              todos los públicos.
            </p>

            <div className="featured-games">
              <h3 className="games-title">
                <span className="games-icon">🏆</span>
                Algunos de nuestros títulos más conocidos
              </h3>
              <div className="games-list">
                {featuredGames.map((game, index) => (
                  <span key={index} className="game-badge">
                    {game}
                  </span>
                ))}
              </div>
            </div>

            <p>
              Estos son un reflejo del futuro prometedor de nuestros próximos
              lanzamientos, que podrás seguir desde nuestra web y medios
              sociales.
            </p>

            <div className="action-buttons">
              <a href="/noticias" className="cta-button primary">
                <span className="button-icon">📧</span>
                Newsletter mensual
              </a>
              <a href="/catalogo" className="cta-button secondary">
                <span className="button-icon">📚</span>
                Ver catálogo completo
              </a>
            </div>
          </div>
        </section>

        <hr className="section-divider" />

        <section className="content-section english-section">
          <div className="section-header">
            <span className="language-badge english">🇬🇧 English</span>
          </div>

          <div className="section-content">
            <p className="intro-text">
              <strong className="brand-name">Maldito Games</strong> is a Spanish
              publisher dedicated to the edition and localization of boardgames.
            </p>

            <p>
              Founded in <strong className="highlight">2015</strong> with the
              goal of publishing titles that had never been translated to our
              language, we have since been working to ensure our boardgames are
              produced with the highest quality and attention to detail, which
              is our main goal and identity.
            </p>

            <p>
              Nowadays, we have more than{" "}
              <strong className="highlight">
                300 carefully-selected titles
              </strong>
              , to offer a diverse and wide catalog for everyone. Some of our
              most known titles like <strong>Terraforming Mars</strong>,{" "}
              <strong>Brass Birmingham</strong>, <strong>Tainted Grail</strong>{" "}
              or <strong>Anachrony</strong>, or our bestselling introductory
              games like <strong>Wingspan</strong>, <strong>Cubirds</strong> or{" "}
              <strong>Dice Hospital</strong>, are considered by us and our
              customers as core components of their game shelves.
            </p>

            <p>
              They are just a glimpse of Maldito Games' next releases and bright
              future, which you can follow through our social media. Following{" "}
              <a href="/noticias" className="newsletter-link">
                this link
              </a>{" "}
              you can keep updated of our news through our monthly newsletter
              (in Spanish).
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SobreNosotrosComponent;
