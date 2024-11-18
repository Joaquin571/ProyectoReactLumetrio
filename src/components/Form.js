import React, { useState } from "react";

function Form() {
  const [formData, setFormData] = useState({ name: "", email: "", mensaje: "" });
  const [successMessage, setSuccessMessage] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value }); 
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Datos enviados:", formData); 

    setSuccessMessage(true);
    setFormData({ name: "", email: "", mensaje: "" }); 
    setTimeout(() => setSuccessMessage(false), 3000); 
  };

  return (
    <div className="container">
      <h2>Formulario de contacto</h2>
      {successMessage && (
        <div className="success-message">¡Formulario enviado correctamente!</div>
      )}
      <form onSubmit={handleSubmit}>
        <label>
          Nombre:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Correo electrónico:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        <label>
            Mensaje: 
            <input
            type="text"
            name="mensaje"
            value={formData.mensaje}
            onChange={handleChange}
            required
            />
        </label>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default Form;
