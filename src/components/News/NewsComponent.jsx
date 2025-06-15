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
      title: "After Us",
      description:
        "AFTER US 2083. La humanidad se extinguió hace varias décadas. En la Tierra solo quedan algunos restos de su legado. Con el tiempo, la naturaleza ha reclamado el planeta. Mientras el mundo vuelve a la vida, nuevas especies emergen y evolucionan.",
      image:
        "https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg",
    },
    {
      id: 2,
      title: "II HOBBITJORNADAS",
      description:
        "II HOBBIT JORNADAS El próximo 1 de abril estaremos presentes en las «II HOBBITJORNADAS» unas jornadas organizadas por la asociación «Queremos Jugar» y el canal especializado en juegos de mesa «El agujero hobbit».",
      image: "https://images.pexels.com/photos/776654/pexels-photo-776654.jpeg",
    },
    {
      id: 3,
      title: "Nuevos Lanzamientos 2024",
      description:
        "Descubre los próximos lanzamientos que llegarán este año. Una selección cuidadosa de juegos que prometen revolucionar tu mesa de juego con mecánicas innovadoras y temáticas fascinantes.",
      image:
        "https://images.pexels.com/photos/1040157/pexels-photo-1040157.jpeg",
    },
    {
      id: 4,
      title: "Torneo Nacional de Juegos de Mesa",
      description:
        "Se acerca el torneo nacional más importante del año. Participa en diferentes categorías y demuestra tus habilidades estratégicas contra los mejores jugadores del país.",
      image:
        "https://images.pexels.com/photos/1040157/pexels-photo-1040157.jpeg",
    },
  ];

  return (
    <div className="news-container">
      <div className="news-header">
        <h1 className="news-title">NOTICIAS</h1>
      </div>
      <div className="news-grid">
        {newsItems.map((item) => (
          <NewsItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}
