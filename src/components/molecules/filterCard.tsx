import React from "react"; // Importa React para utilizar JSX
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTrigger,
} from "../ui/dialog"; // Importa los componentes de diálogo personalizados
import { Icon } from "@iconify/react"; // Importa Icon para usar íconos de Iconify
import { Button } from "../ui/button"; // Importa el componente personalizado de botón
import ScalesNumberFilter from "../atoms/scalesNumberFilter"; // Importa el componente ScalesNumberFilter
import { Text } from "../atoms/text"; // Importa el componente Text

// Componente FilterCard: muestra una tarjeta con filtros que se abre en un diálogo modal
// Recibe 'onScalesChange' como prop, que se ejecuta cuando cambia el número de escalas
const FilterCard = ({
  onScalesChange,
}: {
  onScalesChange: (scales: number | null) => void;
}) => {
  return (
    <div className="bg-accent w-3/4 mx-auto">
      {/* Contenedor principal con fondo de color 'accent' y tamaño relativo */}
      <Dialog> {/* Componente Dialog que gestiona el modal */}
        <DialogTrigger asChild>
          {/* Componente que activa el diálogo (en este caso un botón con ícono) */}
          <Button variant="ghost">
            <Icon
              icon="stash:filter-duotone"
              className="h-6 w-6 text-primary mr-1"
            /> {/* Ícono de filtro con estilos de tamaño y color */}
            <Text text="Filters" /> {/* Texto 'Filters' */}
          </Button>
        </DialogTrigger>
        <DialogContent className="w-[300px]">
          {/* Contenido del modal con un ancho fijo de 300px */}
          <div className="flex flex-col justify-center items-center space-y-2">
            {/* Contenedor flex que alinea el contenido verticalmente y con espacio entre los elementos */}
            <h1 className="text-2xl font-bold self-start">Filters</h1>
            {/* Título del diálogo modal */}
            <ScalesNumberFilter onChange={onScalesChange} />
            {/* Componente de filtro de número de escalas */}
            <div className="self-end">
              {/* Contenedor del botón de aplicar, alineado a la derecha */}
              <DialogClose asChild>
                {/* Botón que cierra el diálogo cuando se hace clic en 'Apply' */}
                <Button variant="default">Apply</Button>
              </DialogClose>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default FilterCard; // Exporta el componente para ser utilizado en otras partes de la aplicación
