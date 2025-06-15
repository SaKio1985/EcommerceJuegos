import React, { useState } from "react";
import "./ContactComponent.css";

const ContactComponent = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [department, setDepartment] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [acceptedPrivacy, setAcceptedPrivacy] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validar campos y enviar formulario
  };

  return (
    <div className="contact-container">
      <h1>Contacto</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nombre / Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email">Correo electrónico / Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="department">Departamento / Departament</label>
          <select
            id="department"
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
          >
            <option value="">Elige una opción del desplegable</option>
            <option value="consulta-general">Consulta general</option>
            <option value="te-falta-alguna-pieza">
              ¿Te falta alguna pieza?
            </option>
            <option value="asociaciones-o-clubs">Asociaciones o clubs</option>
            <option value="resenadores">Reseñadores</option>
          </select>
        </div>
        <div>
          <label htmlFor="subject">Asunto / Subject</label>
          <input
            type="text"
            id="subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="message">Mensaje / Message</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              checked={acceptedPrivacy}
              onChange={(e) => setAcceptedPrivacy(e.target.checked)}
            />
            He leído y acepto la política de privacidad y el tratamiento de mis
            datos.
          </label>
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default ContactComponent;
