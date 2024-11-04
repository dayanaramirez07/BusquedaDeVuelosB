import * as React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";  // Importa los componentes necesarios para crear el menú desplegable

// Componente PassengerNumber que permite seleccionar el número de pasajeros
// Recibe una función como prop, 'onSelectPassengers', que se ejecuta cuando se selecciona un número de pasajeros
const PassengerNumber = ({ onSelectPassengers }: { onSelectPassengers: (num: number) => void }) => {
  return (
    // Componente Select para desplegar la lista de opciones
    // Llama a la función onSelectPassengers cuando cambia el valor seleccionado
    <Select onValueChange={(value) => onSelectPassengers(parseInt(value))}>
      
      {/* Desencadenador del menú desplegable, mostrando el valor seleccionado o un placeholder */}
      <SelectTrigger className="w-full border-primary">
        <SelectValue placeholder="Select number of passengers" /> {/* Placeholder predeterminado */}
      </SelectTrigger>
      
      {/* Contenido del menú desplegable con las opciones de selección */}
      <SelectContent>
        <SelectGroup>
          {/* Etiqueta del grupo de selección */}
          <SelectLabel>Passengers</SelectLabel>

          {/* Crea una lista de opciones del 1 al 8, utilizando un array */}
          {[...Array(8)].map((_, i) => (
            <SelectItem key={i + 1} value={(i + 1).toString()}>
              {i + 1}  {/* Muestra el número de pasajeros como opción */}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default PassengerNumber;  // Exporta el componente para que pueda ser utilizado en otras partes de la aplicación


/**
 * PassengerNumber Component
 * 
 * Este componente permite al usuario seleccionar el número de pasajeros utilizando un menú desplegable.
 * El número de pasajeros seleccionados se devuelve a través de una función de devolución de llamada (`onSelectPassengers`).
 * 
 * Props:
 * - onSelectPassengers: Función de callback que recibe como argumento el número de pasajeros seleccionados. 
 *   El valor seleccionado se convierte en un número (`number`) antes de ser enviado.
 * 
 * Funcionalidad:
 * - Renderiza un `Select` que contiene un disparador (`SelectTrigger`) y un contenido desplegable (`SelectContent`).
 * - El disparador muestra un texto por defecto que invita al usuario a seleccionar el número de pasajeros.
 * - Cuando el usuario selecciona un número, el valor seleccionado (del 1 al 8) es enviado a la función `onSelectPassengers`.
 * - El contenido desplegable contiene una lista de opciones que representan el número de pasajeros (del 1 al 8).
 * 
 * Componentes Utilizados:
 * - Select: Componente de selección que permite elegir un valor de una lista desplegable.
 * - SelectTrigger: Componente que dispara la apertura del menú desplegable.
 * - SelectValue: Componente que muestra el valor seleccionado o el placeholder si no se ha seleccionado ningún valor.
 * - SelectContent: Contenedor del contenido del menú desplegable.
 * - SelectGroup: Agrupa los elementos dentro del menú desplegable.
 * - SelectItem: Cada una de las opciones disponibles para seleccionar, en este caso, los números del 1 al 8.
 * - SelectLabel: Etiqueta que describe el grupo de opciones, en este caso "Passengers".
 * 
 * Uso:
 * Este componente es útil en formularios donde el usuario necesita seleccionar el número de pasajeros, como en 
 * aplicaciones de reserva de vuelos o transporte.
 */