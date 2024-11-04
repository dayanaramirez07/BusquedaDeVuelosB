import { useState } from "react"; // Importa el hook useState para manejar el estado local
import { useRouter } from "next/router"; // Importa useRouter para acceder a los parámetros de la URL
import FlightCard from "../molecules/flightCard"; // Importa el componente FlightCard para mostrar información de cada vuelo
import FilterCard from "../molecules/filterCard"; // Importa el componente FilterCard para filtrar por número de escalas
import FlightsAvailable from "@/utils/const/flightList"; // Importa la lista de vuelos disponibles desde un archivo de constantes

// Componente FlightList: muestra una lista de vuelos filtrados según los parámetros de búsqueda
const FlightList = () => {
  const router = useRouter();
  // Extrae los parámetros de búsqueda de la URL: origen, destino, fechas y tipo de viaje
  const { origin, destination, startDate, endDate, tripType } = router.query;

  const [selectedScales, setSelectedScales] = useState<number | null>(null);
  // Estado 'selectedScales' para manejar el filtro de número de escalas

  // Función para normalizar cadenas de texto y evitar problemas con mayúsculas/minúsculas o arrays
  const normalizeString = (str: string | string[] | undefined) => {
    return Array.isArray(str) ? str[0].toLowerCase() : (str || "").toLowerCase();
  };

  // Normaliza las cadenas de origen, destino, fechas y tipo de viaje
  const originString = normalizeString(origin);
  const destinationString = normalizeString(destination);
  const startDateString = Array.isArray(startDate) ? startDate[0] : startDate || "";
  const endDateString = Array.isArray(endDate) ? endDate[0] : endDate || "";
  const tripTypeString = Array.isArray(tripType) ? tripType[0] : tripType || "departure";

  // Filtra los vuelos disponibles según los criterios de búsqueda
  const filteredFlights = FlightsAvailable.filter((flight) => {
    // Verifica si el origen coincide con el valor seleccionado
    const matchesOrigin = originString ? flight.origin.toLowerCase() === originString : true;
    // Verifica si el destino coincide con el valor seleccionado
    const matchesDestination = destinationString
      ? flight.destination.toLowerCase() === destinationString
      : true;
    // Verifica si la fecha de inicio coincide con el valor seleccionado
    const matchesStartDate = startDateString ? flight.date === startDateString.split("T")[0] : true;
    // Verifica si la fecha de regreso coincide (para vuelos de ida y vuelta)
    const matchesEndDate = endDateString ? flight.date === endDateString.split("T")[0] : true;
    // Verifica si el número de escalas coincide con el filtro seleccionado
    const matchesScales = selectedScales !== null ? flight.scales === selectedScales : true;

    // Filtrado para viajes de solo ida
    if (tripTypeString === "departure") {
      return matchesOrigin && matchesDestination && matchesStartDate && matchesScales;
    }

    // Filtrado para viajes de ida y vuelta
    if (tripTypeString === "roundtrip") {
      // Verifica si la información del vuelo corresponde al vuelo de regreso
      const matchesReturn =
        flight.origin.toLowerCase() === destinationString &&
        flight.destination.toLowerCase() === originString;

      return (
        (matchesOrigin && matchesDestination && matchesStartDate) || 
        (matchesReturn && matchesEndDate && matchesScales)
      );
    }

    return false;
  });

  
  return (
    <div className="flex flex-col justify-center bg-accent h-screen">
      {/* Contenedor principal que centra el contenido verticalmente con un fondo de color */}
      <div className="flex flex-col">
        <div className="mb-2">
          <FilterCard onScalesChange={setSelectedScales} />
          {/* Componente FilterCard para seleccionar el número de escalas */}
        </div>
        <div className="grid grid-cols-1 gap-6 overflow-y-auto max-h-[90vh] pb-2 mb-2">
          {/* Contenedor para los vuelos filtrados, permite desplazamiento vertical */}
          {filteredFlights.length > 0 ? (
            // Si hay vuelos filtrados, los renderiza utilizando el componente FlightCard
            filteredFlights.map((flight, index) => (
              <FlightCard
                key={index}
                flight={{
                  origin: flight.origin,
                  destination: flight.destination,
                  date: flight.date,
                  time: flight.time,
                  scales: flight.scales,
                  prices: flight.prices,
                }}
              />
            ))
          ) : (
            // Si no se encuentran vuelos, muestra un mensaje y una alerta
              <>
              {alert('No flights found for the given criteria.')} {/* Alerta que se muestra cuando no hay vuelos */}
              <p className="w-3/4 mx-auto">No flights found for the given criteria.</p>
              </>
          )}
        </div>
      </div>
    </div>
  );
};

export default FlightList; // Exporta el componente FlightList para ser usado en otras partes de la aplicación
