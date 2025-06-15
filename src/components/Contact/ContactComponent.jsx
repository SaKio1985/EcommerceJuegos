import { useState } from "react";
import "./ContactComponent.css";

const ContactComponent = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    department: "",
    subject: "",
    message: "",
    acceptedPrivacy: false,
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const departmentOptions = [
    { value: "", label: "Elige una opción del desplegable" },
    { value: "consulta-general", label: "Consulta general" },
    { value: "te-falta-alguna-pieza", label: "¿Te falta alguna pieza?" },
    { value: "asociaciones-o-clubs", label: "Asociaciones o clubs" },
    { value: "resenadores", label: "Reseñadores" },
  ];

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "El nombre es obligatorio";
    }

    if (!formData.email.trim()) {
      newErrors.email = "El correo electrónico es obligatorio";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "El correo electrónico no es válido";
    }

    if (!formData.department) {
      newErrors.department = "Selecciona un departamento";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "El asunto es obligatorio";
    }

    if (!formData.message.trim()) {
      newErrors.message = "El mensaje es obligatorio";
    } else if (formData.message.length < 10) {
      newErrors.message = "El mensaje debe tener al menos 10 caracteres";
    }

    if (!formData.acceptedPrivacy) {
      newErrors.acceptedPrivacy = "Debes aceptar la política de privacidad";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      // Simular envío del formulario
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setIsSubmitted(true);

      // Resetear formulario después del éxito
      setTimeout(() => {
        setFormData({
          name: "",
          email: "",
          department: "",
          subject: "",
          message: "",
          acceptedPrivacy: false,
        });
        setIsSubmitted(false);
      }, 3000);
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Limpiar error cuando el usuario empiece a escribir
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  if (isSubmitted) {
    return (
      <div className="contact-container">
        <div className="success-message">
          <div className="success-icon">✓</div>
          <h3>¡Mensaje enviado correctamente!</h3>
          <p>Gracias por contactarnos. Te responderemos lo antes posible.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="contact-container">
      <div className="contact-header">
        <h2>Contacto</h2>
        <p>Completa el formulario y nos pondremos en contacto contigo</p>
      </div>

      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="name" className="form-label">
              Nombre / Name <span className="required">*</span>
            </label>
            <input
              type="text"
              id="name"
              className={`form-input ${errors.name ? "error" : ""}`}
              value={formData.name}
              onChange={(e) => handleInputChange("name", e.target.value)}
              placeholder="Tu nombre completo"
            />
            {errors.name && (
              <span className="error-message">{errors.name}</span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Correo electrónico / Email <span className="required">*</span>
            </label>
            <input
              type="email"
              id="email"
              className={`form-input ${errors.email ? "error" : ""}`}
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              placeholder="tu@email.com"
            />
            {errors.email && (
              <span className="error-message">{errors.email}</span>
            )}
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="department" className="form-label">
            Departamento / Department <span className="required">*</span>
          </label>
          <select
            id="department"
            className={`form-select ${errors.department ? "error" : ""}`}
            value={formData.department}
            onChange={(e) => handleInputChange("department", e.target.value)}
          >
            {departmentOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          {errors.department && (
            <span className="error-message">{errors.department}</span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="subject" className="form-label">
            Asunto / Subject <span className="required">*</span>
          </label>
          <input
            type="text"
            id="subject"
            className={`form-input ${errors.subject ? "error" : ""}`}
            value={formData.subject}
            onChange={(e) => handleInputChange("subject", e.target.value)}
            placeholder="Asunto de tu consulta"
          />
          {errors.subject && (
            <span className="error-message">{errors.subject}</span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="message" className="form-label">
            Mensaje / Message <span className="required">*</span>
          </label>
          <textarea
            id="message"
            className={`form-textarea ${errors.message ? "error" : ""}`}
            value={formData.message}
            onChange={(e) => handleInputChange("message", e.target.value)}
            placeholder="Escribe tu mensaje aquí..."
            rows="5"
          ></textarea>
          {errors.message && (
            <span className="error-message">{errors.message}</span>
          )}
        </div>

        <div className="form-group checkbox-group">
          <label className="checkbox-label">
            <input
              type="checkbox"
              className={`form-checkbox ${
                errors.acceptedPrivacy ? "error" : ""
              }`}
              checked={formData.acceptedPrivacy}
              onChange={(e) =>
                handleInputChange("acceptedPrivacy", e.target.checked)
              }
            />
            <span className="checkbox-text">
              He leído y acepto la{" "}
              <a href="/privacy" className="privacy-link">
                política de privacidad
              </a>{" "}
              y el tratamiento de mis datos. <span className="required">*</span>
            </span>
          </label>
          {errors.acceptedPrivacy && (
            <span className="error-message">{errors.acceptedPrivacy}</span>
          )}
        </div>

        <button type="submit" className="submit-button" disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              <span className="loading-spinner"></span>
              Enviando...
            </>
          ) : (
            <>
              <span className="send-icon">📧</span>
              Enviar mensaje
            </>
          )}
        </button>
      </form>
    </div>
  );
};

export default ContactComponent;
