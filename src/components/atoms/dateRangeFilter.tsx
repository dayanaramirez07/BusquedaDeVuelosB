import * as React from "react";
import { CalendarIcon } from "@radix-ui/react-icons"; // Importa el ícono de calendario
import { format } from "date-fns"; // Importa la función para formatear fechas
import { DateRange } from "react-day-picker"; // Importa el tipo DateRange para manejar rangos de fechas
import { cn } from "@/lib/utils"; // Función utilitaria para manejar clases condicionales
import { Button } from "@/components/ui/button"; // Importa el componente de botón
import { Calendar } from "@/components/ui/calendar"; // Importa el componente de calendario
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"; // Importa los componentes de popover

// Componente para seleccionar un rango de fechas
const DateRangeFilter = ({ className }: React.HTMLAttributes<HTMLDivElement>) => {
  // Estado local para almacenar el rango de fechas seleccionado
  const [date, setDate] = React.useState<DateRange | undefined>(undefined);

  // Definición de la fecha actual para evitar seleccionar fechas anteriores
  const today = new Date();

  return (
    // Contenedor principal del componente con clases condicionales
    <div className={cn("grid gap-2", className)}>
      {/* Popover que contiene el selector de calendario */}
      <Popover>
        
        {/* Disparador del popover que se muestra como un botón */}
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant={"outline"}
            className={cn(
              "w-[250px] justify-start text-left font-normal", // Botón con estilos predeterminados
              !date && "text-muted-foreground" // Cambia el color del texto si no se ha seleccionado fecha
            )}
          >
            {/* Ícono de calendario */}
            <CalendarIcon className="mr-2 h-4 w-4 text-primary" />

            {/* Muestra el rango de fechas seleccionado o un mensaje por defecto */}
            {date?.from ? (
              // Si la fecha "desde" está seleccionada, muestra el rango
              date.to ? (
                <>
                  {format(date.from, "LLL dd, y")} - {format(date.to, "LLL dd, y")} {/* Formato para rango de fechas */}
                </>
              ) : (
                // Si solo se ha seleccionado la fecha "desde", muestra esa fecha
                format(date.from, "LLL dd, y")
              )
            ) : (
              // Texto por defecto si no se ha seleccionado ninguna fecha
              <span>Select date range</span>
            )}
          </Button>
        </PopoverTrigger>

        {/* Contenido del popover que contiene el calendario */}
        <PopoverContent className="w-auto p-0" align="start">
          {/* Componente de calendario que permite seleccionar un rango de fechas */}
          <Calendar
            initialFocus // Indica que el foco debe ir al calendario al abrir el popover
            mode="range" // Habilita el modo de selección de rango de fechas
            defaultMonth={new Date()} // Mes por defecto es el mes actual
            selected={date} // Fecha seleccionada actual
            onSelect={setDate} // Función que actualiza el estado cuando se selecciona una nueva fecha
            numberOfMonths={1} // Número de meses mostrados
            disabled={{ before: today }} // Deshabilita la selección de fechas anteriores a hoy
          />
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default DateRangeFilter; // Exporta el componente para su uso en otros módulos

/**
 * DateRangeFilter Component
 * 
 * Este componente permite al usuario seleccionar un rango de fechas mediante un calendario desplegable.
 * Las fechas seleccionadas se muestran en un botón, y el calendario permite seleccionar tanto una fecha
 * de inicio como una fecha de finalización.
 * 
 * Props:
 * - className: Clase CSS opcional para personalizar el estilo del componente.
 * 
 * Estado Local:
 * - date: Estado que almacena el rango de fechas seleccionadas. Es de tipo `DateRange`, que incluye 
 *   dos propiedades: `from` (fecha de inicio) y `to` (fecha de finalización).
 * 
 * Funcionalidad:
 * - Renderiza un botón que muestra el ícono de calendario y, si se ha seleccionado un rango de fechas,
 *   muestra ambas fechas formateadas. Si no se ha seleccionado ninguna fecha, muestra un texto que
 *   indica que se debe seleccionar un rango de fechas.
 * - Al hacer clic en el botón, se despliega un calendario que permite seleccionar un rango de fechas 
 *   utilizando el modo "range" del componente `Calendar`.
 * - El componente deshabilita las fechas anteriores a la fecha actual para evitar que se seleccionen
 *   fechas pasadas.
 * - Utiliza `date-fns` para formatear las fechas seleccionadas.
 * 
 * Componentes Utilizados:
 * - Button: Botón reutilizable que muestra el rango de fechas o el texto predeterminado.
 * - Calendar: Componente que muestra un calendario para la selección de fechas. Aquí se utiliza en el
 *   modo "range" para seleccionar un rango de fechas.
 * - Popover y PopoverContent: Contenedor que despliega el calendario cuando se hace clic en el botón.
 * 
 * Uso:
 * Este componente es adecuado para formularios o filtros donde se requiera seleccionar un rango de fechas, 
 * como en aplicaciones de búsqueda de vuelos, hoteles o eventos que incluyan fechas de inicio y finalización.
 */