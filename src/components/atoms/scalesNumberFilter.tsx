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

// Componente ScalesNumberFilter: permite seleccionar un número de escalas desde un desplegable
// Recibe una función 'onChange' como prop, la cual se ejecuta cuando cambia el valor seleccionado
const ScalesNumberFilter = ({ onChange }: { onChange: (scales: number) => void }) => {
  return (
    <Select onValueChange={(value) => onChange(parseInt(value))}>
      {/* Ejecuta 'onChange' con el valor seleccionado, transformado a número */}
      <SelectTrigger className="w-[250px] border-primary"> 
        {/* Botón que activa el desplegable, con estilo de ancho y borde primario */}
        <SelectValue placeholder="Select number of scales" /> 
        {/* Muestra el valor seleccionado o el placeholder */}
      </SelectTrigger>
      <SelectContent> {/* Contenedor del contenido que se despliega */}
        <SelectGroup> {/* Agrupa los elementos del select */}
          <SelectLabel>Scales</SelectLabel> 
          {/* Etiqueta que indica que los elementos son cantidades de escalas */}
          {[...Array(3)].map((_, i) => (
            <SelectItem key={i} value={i.toString()}> 
              {/* Mapea un arreglo de tres elementos (0, 1, 2) para crear un ítem por cada número */}
              {i} {/* Muestra el número de escalas como texto */}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default ScalesNumberFilter; // Exporta el componente para ser utilizado en otras partes de la aplicación
