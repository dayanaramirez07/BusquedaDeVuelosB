import * as React from "react"; // Importa todas las funciones y componentes de React
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"; // Importa los componentes personalizados de select
import scheduleRanges from "@/utils/const/scheduleRanges"; // Importa el arreglo de rangos de horarios predefinidos

// Componente ScheduleRangeFilter: permite seleccionar un rango de horarios desde una lista desplegable
const ScheduleRangeFilter = () => {
  return (
    <Select> {/* Componente Select que envuelve la funcionalidad del desplegable */}
      <SelectTrigger className="w-[250px] border-primary">
        {/* Botón que activa el desplegable, con estilo de ancho y borde primario */}
        <SelectValue placeholder="Select schedule range" />
        {/* Muestra el valor seleccionado o el placeholder */}
      </SelectTrigger>
      <SelectContent> {/* Contenedor del contenido que se despliega */}
        <SelectGroup> {/* Agrupa los elementos del select */}
          <SelectLabel>Schedule range</SelectLabel>
          {/* Etiqueta que indica que los elementos son rangos de horarios */}
          {scheduleRanges.map((range) => (
            <SelectItem key={range.value} value={range.value}>
              {/* Mapea el arreglo de rangos de horarios y crea un ítem por cada rango */}
              {range.label} {/* Muestra la etiqueta del rango de horario */}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default ScheduleRangeFilter; // Exporta el componente para ser utilizado en otras partes de la aplicación
