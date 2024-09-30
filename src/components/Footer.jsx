import React from "react";
import "./footer.css";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 py-4 px-6">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="footer">
            © Maldito Games, 2024 | Todos los derechos reservados
          </p>
          <nav className="flex mb-2 md:mb-0">
            <a href="/aviso-legal" className="hover:text-white mr-4">
              Aviso legal
            </a>
            <a href="/politica-privacidad" className="hover:text-white mr-4">
              Política de privacidad
            </a>
            <a href="/politica-cookies" className="hover:text-white">
              Política de cookies
            </a>
          </nav>
          <div className="flex space-x-4">
            <a
              href="https://www.facebook.com/malditogames"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white"
            >
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a
              href="https://twitter.com/malditogameses"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white"
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a
              href="https://www.youtube.com/channel/UCjlYOfNu4oF6rczSlMCNqgQ"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white"
            >
              <FontAwesomeIcon icon={faYoutube} />
            </a>
            <a
              href="https://www.instagram.com/malditogames/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
