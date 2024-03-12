import React, { useState } from "react";
import style from "./form.module.css";
import Swal from "sweetalert2";
import { useForm } from "@formspree/react";
import sendForm from "../../utils/sendForm";

function Form() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const initialState = {
    name: "",
    email: "",
    message: "",
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  function handleSubmit() {
    const message =
      "¡Muchas gracias por contactar conmigo " +
      `<strong>${formData.name}</strong>` +
      "! En breve te contactaré para brindarte más información.";

    if (
      formData.name === "" ||
      formData.email === "" ||
      formData.message === ""
    ) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Todos los campos son obligatorios.",
      });
      return;
    }
    try {
      sendForm(formData);
      Swal.fire({
        icon: "success",
        title: "¡Mensaje enviado!",
        html: message, // Cambiado a 'html' para permitir el uso de etiquetas HTML
      }).then(() => {
        setFormData(initialState);
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Hubo un error al enviar el correo. Por favor, intenta de nuevo.",
        footer: "Error: " + error,
      });
    }
  }

  return (    
    <>
      <h2 style={{textAlign:"center", color:"white",textDecoration:"underline rgba(0, 0, 255, 0.425)"}}>Contacto</h2>
      <div className={style.containerForm} id="contact">
        <form onSubmit={handleSubmit} className={style.form}>
          <div className={style.inputContainer}>
            <label htmlFor="name">Nombre:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className={style.input}
              required
              placeholder="¿Cuál es tu nombre?"
            />

            <label htmlFor="email">Correo Electronico:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className={style.input}
              placeholder="Correo electrónico"
              required
            />
          </div>
          <label htmlFor="message">Comentarios</label>
          <input
            type="textarea"
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            className={style.inputTextarea}
            placeholder="¿Con qué comenzamos?"
          />

          <button
            className={style.btn}
            onClick={(e) => {
              e.preventDefault();
              handleSubmit();
            }}
          >
            Enviar
          </button>
        </form>
      </div>
    </>
  );
}

export default Form;
