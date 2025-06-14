import React, { useState } from "react";
import "./ContactComponent.css";

const ContactComponent = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		department: "",
		subject: "",
		message: "",
		acceptedPrivacy: false
	});

	const handleChange = (e) => {
		const { name, value, type, checked } = e.target;
		setFormData(prev => ({
			...prev,
			[name]: type === 'checkbox' ? checked : value
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		
		if (!formData.acceptedPrivacy) {
			alert("Debes aceptar la política de privacidad para continuar.");
			return;
		}
		
		// Simular envío del formulario
		alert("¡Gracias por tu mensaje! Te responderemos pronto.");
		
		// Resetear formulario
		setFormData({
			name: "",
			email: "",
			department: "",
			subject: "",
			message: "",
			acceptedPrivacy: false
		});
	};

	return (
		<div className="contact-container">
			<div className="contact-header">
				<h1 className="contact-title">Contacto</h1>
				<p className="contact-subtitle">
					¿Tienes alguna pregunta o necesitas ayuda? Estamos aquí para ayudarte. 
					Completa el formulario y nos pondremos en contacto contigo lo antes posible.
				</p>
			</div>

			<form onSubmit={handleSubmit} className="contact-form">
				<div className="form-group">
					<label htmlFor="name" className="form-label">
						Nombre / Name *
					</label>
					<input
						type="text"
						id="name"
						name="name"
						value={formData.name}
						onChange={handleChange}
						className="form-input"
						required
						placeholder="Tu nombre completo"
					/>
				</div>

				<div className="form-group">
					<label htmlFor="email" className="form-label">
						Correo electrónico / Email *
					</label>
					<input
						type="email"
						id="email"
						name="email"
						value={formData.email}
						onChange={handleChange}
						className="form-input"
						required
						placeholder="tu@email.com"
					/>
				</div>

				<div className="form-group">
					<label htmlFor="department" className="form-label">
						Departamento / Department *
					</label>
					<select
						id="department"
						name="department"
						value={formData.department}
						onChange={handleChange}
						className="form-select"
						required
					>
						<option value="">Elige una opción del desplegable</option>
						<option value="consulta-general">Consulta general</option>
						<option value="te-falta-alguna-pieza">¿Te falta alguna pieza?</option>
						<option value="asociaciones-o-clubs">Asociaciones o clubs</option>
						<option value="resenadores">Reseñadores</option>
						<option value="soporte-tecnico">Soporte técnico</option>
						<option value="colaboraciones">Colaboraciones</option>
					</select>
				</div>

				<div className="form-group">
					<label htmlFor="subject" className="form-label">
						Asunto / Subject *
					</label>
					<input
						type="text"
						id="subject"
						name="subject"
						value={formData.subject}
						onChange={handleChange}
						className="form-input"
						required
						placeholder="Breve descripción del tema"
					/>
				</div>

				<div className="form-group">
					<label htmlFor="message" className="form-label">
						Mensaje / Message *
					</label>
					<textarea
						id="message"
						name="message"
						value={formData.message}
						onChange={handleChange}
						className="form-textarea"
						required
						placeholder="Describe tu consulta o mensaje en detalle..."
					/>
				</div>

				<div className="checkbox-group">
					<input
						type="checkbox"
						id="acceptedPrivacy"
						name="acceptedPrivacy"
						checked={formData.acceptedPrivacy}
						onChange={handleChange}
						className="form-checkbox"
						required
					/>
					<label htmlFor="acceptedPrivacy" className="checkbox-label">
						He leído y acepto la política de privacidad y el tratamiento de mis datos. *
					</label>
				</div>

				<button type="submit" className="submit-button">
					Enviar mensaje
				</button>
			</form>
		</div>
	);
};

export default ContactComponent;