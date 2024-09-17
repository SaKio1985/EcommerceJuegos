import { faChild, faClock, faUsers } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./CardComponent.css";
import { Link } from "react-router-dom";

const CardComponent = ({
  image,
  title,
  availability,
  author,
  price,
  players,
  duration,
  age,
  id,
}) => {
  return (
    <div className="card">
      <img src={image} alt={title} className="card-image" />
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
        <p>{id}</p>
        <button type="button" className="card-button">
          <Link to={`/boardgame/${id}`}>Más información</Link>
        </button>
      </div>
    </div>
  );
};

export default CardComponent;
