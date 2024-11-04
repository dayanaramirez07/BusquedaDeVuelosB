import React, { useState } from "react"; // Importa React y useState para manejar el estado local
import { Button } from "../ui/button"; // Importa el componente personalizado de botón
import { Icon } from "@iconify/react"; // Importa Icon para usar íconos de Iconify
import { Text } from "../atoms/text"; // Importa el componente Text
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog"; // Importa los componentes de diálogo personalizados
import Category from "../atoms/category"; // Importa el componente Category para mostrar y seleccionar categorías
import categoriesData from "@/utils/const/categoriesData"; // Importa los datos de categorías
import Flight from "@/utils/interface/flight"; // Importa la interfaz Flight para tipar las propiedades del vuelo

// Componente FlightCard: Renderiza la información de un vuelo, permite seleccionar una categoría y mostrar su precio
// Recibe 'flight' como prop, que es un objeto con los datos del vuelo
const FlightCard: React.FC<{ flight: Flight }> = ({ flight }) => {
  const [selectedCategory, setSelectedCategory] = useState(categoriesData[0]);
  // Estado 'selectedCategory' para almacenar la categoría seleccionada (por defecto la primera del arreglo)

  // Función que devuelve el precio según la categoría seleccionada
  const getCategoryPrice = () => {
    return flight.prices[selectedCategory.value as keyof typeof flight.prices];
    // Busca el precio en el objeto 'prices' del vuelo basado en la categoría seleccionada
  };

  return (
    <div className="w-3/4 mx-auto bg-white shadow-md rounded-lg px-6 py-6 sm:py-8 lg:px-8 grid grid-cols-2 transition-colors shadow-primary">
      {/* Contenedor principal con estilos de ancho, fondo blanco, sombra y distribución en 2 columnas */}
      <div className="grid grid-rows-1 items-center space-y-3">
        {/* Columna izquierda: información del vuelo, alineada verticalmente con espacio entre filas */}
        <div className="flex items-center font-bold space-x-3">
          {/* Fila para el origen del vuelo */}
          <span>
            <Icon icon="ion:paper-plane" className="h-6 w-6 text-primary" />
            {/* Ícono de avión */}
          </span>
          <Text text={`Origin: ${flight.origin}`} />
          {/* Texto que muestra el origen del vuelo */}
        </div>
        <div className="flex items-center font-bold space-x-3">
          {/* Fila para el destino del vuelo */}
          <span>
            <Icon
              icon="ion:paper-plane"
              className="h-6 w-6 text-primary transform rotate-90"
            />
            {/* Ícono de avión rotado 90 grados */}
          </span>
          <Text text={`Destination: ${flight.destination}`} />
          {/* Texto que muestra el destino del vuelo */}
        </div>
        <div className="flex items-center font-bold space-x-3">
          {/* Fila para la fecha y hora del vuelo */}
          <span>
            <Icon icon="radix-icons:calendar" className="h-6 w-6 text-primary" />
            {/* Ícono de calendario */}
          </span>
          <Text text={`Date and time: ${flight.date} / ${flight.time}`} />
          {/* Texto que muestra la fecha y hora del vuelo */}
        </div>
        <div className="flex items-center font-bold space-x-3">
          {/* Fila para el número de escalas del vuelo */}
          <span>
            <Icon
              icon="icon-park-outline:transfer"
              className="h-6 w-6 text-primary"
            />
            {/* Ícono de transferencia/escalas */}
          </span>
          <Text text={`Number of scales: ${flight.scales}`} />
          {/* Texto que muestra el número de escalas */}
        </div>
        <div className="flex items-center font-bold space-x-3">
          {/* Fila para seleccionar la categoría */}
          <span>
            <Icon
              icon="fluent-emoji-high-contrast:seat"
              className="h-6 w-6 text-primary"
            />
            {/* Ícono de asiento */}
          </span>
          <Text text="Category: " />
          {/* Texto estático "Category" */}
          <Dialog>
            {/* Componente de diálogo modal para seleccionar la categoría */}
            <DialogTrigger asChild>
              {/* Trigger del diálogo, en este caso un botón que muestra la categoría seleccionada */}
              <Button variant="outline">{selectedCategory.title}</Button>
              {/* Botón que muestra la categoría seleccionada */}
            </DialogTrigger>
            <DialogContent>
              {/* Contenido del diálogo para seleccionar una categoría */}
              <div className="flex justify-center items-center">
                <Category
                  categories={categoriesData}
                  setSelectedCategory={(category) =>
                    setSelectedCategory(
                      category as {
                        value: "economy" | "business" | "first";
                        title: string;
                        description: string;
                        benefits: string[];
                      }
                    )
                  }
                  prices={flight.prices}
                  /* Componente Category para mostrar las opciones y cambiar la categoría seleccionada */
                />
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
      <div className="grid grid-rows-1 justify-end">
        {/* Columna derecha: muestra el precio y el botón de reserva */}
        <div className="flex justify-end font-bold">
          {/* Fila para mostrar el precio según la categoría seleccionada */}
          <Text text={`USD ${getCategoryPrice()}`} />
          {/* Texto que muestra el precio actual basado en la categoría seleccionada */}
        </div>
        <div className="flex mt-2">
          {/* Fila para el botón de reserva */}
          <Button>Reserve</Button>
          {/* Botón para reservar el vuelo */}
        </div>
      </div>
    </div>
  );
};

export default FlightCard; // Exporta el componente FlightCard para ser utilizado en otras partes de la aplicación
