import React from "react";
import { useRouter } from "next/router"; // Importa useRouter para redireccionar a otra página con los parámetros de búsqueda
import SearchCard from "../molecules/searchCard"; // Importa el componente SearchCard para el formulario de búsqueda
import SearchParams from "@/utils/interface/search"; // Importa la interfaz SearchParams para definir los parámetros de búsqueda

// Componente Search: envuelve la lógica para manejar la búsqueda de vuelos
const Search: React.FC = () => {
  const router = useRouter(); // Inicializa el hook de enrutamiento para navegar entre páginas

  // Función para manejar la búsqueda de vuelos
  const handleSearch = (searchParams: SearchParams) => {
    // Redirige al usuario a la página de lista de vuelos ('/list') pasando los parámetros de búsqueda en la URL
    router.push({
      pathname: "/list", // Define la ruta a la que redirigir
      query: { ...searchParams }, // Pasa los parámetros de búsqueda como parte de la URL
    });
  };

  return <SearchCard onSearch={handleSearch} />; 
  // Renderiza el componente SearchCard pasándole la función handleSearch como prop para manejar la búsqueda
};

export default Search; // Exporta el componente Search para ser utilizado en otras partes de la aplicación
