import React from "react";

function Home() {
  return (
    <div className="container">
      <h1>Bienvenido a nuestra aplicación</h1>
      <p>
        Estamos encantados de que hayas visitado nuestra página. Aquí podrás
        encontrar información útil y explorar diferentes secciones de nuestra
        aplicación.
      </p>
      <section>
        <h2>¿Qué hacemos?</h2>
        <p>
          Nuestra misión es ofrecer soluciones tecnológicas innovadoras para
          facilitar tu vida diaria. Con nuestros productos y servicios, podrás
          optimizar tu tiempo y esfuerzo en diversas áreas de tu vida personal y
          profesional.
        </p>
      </section>
      <section>
        <h2>Características</h2>
        <ul>
          <li>Fácil de usar y navegar.</li>
          <li>Conexión con APIs para una experiencia interactiva.</li>
          <li>Soporte técnico disponible las 24 horas.</li>
        </ul>
      </section>
    </div>
  );
}

export default Home;
