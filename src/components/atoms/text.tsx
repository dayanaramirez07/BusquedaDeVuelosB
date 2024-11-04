import React from "react"; // Importa React para utilizar JSX

// Componente Title: Renderiza un título con estilos predefinidos
// Recibe 'title' como prop, que es el texto que se mostrará como título
const Title = ({ title }: { title: string }) => {
  return (
    <h2 className="text-center text-3xl font-bold text-primary sm:text-4xl sm:text-left mb-2">
      {/* Estilos: centrado, tamaño del texto ajustable según el tamaño de pantalla, color primario */}
      {title} {/* Muestra el texto recibido en la prop 'title' */}
    </h2>
  );
};

// Componente Text: Renderiza un párrafo con estilos predefinidos
// Recibe 'text' como prop, que es el contenido del párrafo
const Text = ({ text }: { text: string }) => {
  return (
    <p className="text-center text-base sm:text-lg sm:text-left">
      {/* Estilos: centrado, tamaño del texto ajustable según el tamaño de pantalla */}
      {text} {/* Muestra el texto recibido en la prop 'text' */}
    </p>
  );
};

export { Title, Text }; // Exporta los componentes para ser utilizados en otras partes de la aplicación
