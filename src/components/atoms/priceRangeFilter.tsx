import * as React from "react"; // Importa todas las funciones y componentes de React
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"; // Importa los componentes del select personalizados
import priceRanges from "@/utils/const/priceRange"; // Importa el arreglo de rangos de precios predefinidos

// Componente PriceRangeFilter: permite seleccionar un rango de precios desde una lista desplegable
const PriceRangeFilter = () => {
  return (
    <Select> {/* Componente Select que envuelve la funcionalidad del desplegable */}
      <SelectTrigger className="w-[250px] border-primary"> 
        {/* Botón que activa el desplegable, con estilo de ancho y borde primario */}
        <SelectValue placeholder="Select price range" /> 
        {/* Muestra el valor seleccionado o el placeholder */}
      </SelectTrigger>
      <SelectContent> {/* Contenedor del contenido que se despliega */}
        <SelectGroup> {/* Agrupa los elementos del select */}
          <SelectLabel>Price Range</SelectLabel> 
          {/* Etiqueta que indica que los elementos son rangos de precio */}
          {priceRanges.map((range) => (
            <SelectItem key={range.value} value={range.value}> 
              {/* Mapea el arreglo de rangos de precios y crea un ítem por cada rango */}
              {range.label} {/* Muestra la etiqueta del rango de precio */}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default PriceRangeFilter; // Exporta el componente para ser utilizado en otras partes de la aplicación