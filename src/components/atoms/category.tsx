import { useState } from "react"; // Importa el hook useState para manejar el estado local
import { Button } from "@/components/ui/button"; // Importa el componente Button reutilizable
import {
  Card, // Contenedor principal que muestra la información de cada categoría
  CardContent, // Cuerpo del Card donde se coloca la información principal
  CardDescription, // Descripción de la categoría
  CardFooter, // Pie del Card donde se coloca la acción (botón)
  CardHeader, // Encabezado del Card donde se muestran el título y la descripción
  CardTitle, // Título de la categoría
} from "@/components/ui/card"; // Componentes de UI para estructurar las tarjetas (cards)
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"; // Componentes para las pestañas (tabs)
import CategoryProps from "@/utils/interface/category"; // Interfaz que define la estructura de las categorías
import { DialogClose } from "../ui/dialog"; // Componente que cierra el diálogo cuando se selecciona una categoría

// Componente Category que muestra una lista de categorías con sus precios y beneficios
const Category = ({ categories, setSelectedCategory, prices }: CategoryProps) => {
  // Estado local para almacenar la pestaña seleccionada, inicializado con la primera categoría
  const [selectedTab, setSelectedTab] = useState(categories[0].value);

  return (
    // Componente Tabs para crear una interfaz de pestañas
    <Tabs defaultValue={selectedTab} className="w-[400px]">
      {/* Lista de pestañas */}
      <TabsList className="grid w-full grid-cols-3">
        {categories.map((category) => (
          <TabsTrigger
            key={category.value} // Clave única para cada pestaña basada en el valor de la categoría
            value={category.value} // Valor de la pestaña que activa el contenido correspondiente
            onClick={() => {
              setSelectedTab(category.value); // Cambia la pestaña seleccionada
            }}
          >
            {category.title} {/* Título de la categoría mostrado en la pestaña */}
          </TabsTrigger>
        ))}
      </TabsList>

      {/* Contenido que se muestra cuando una pestaña está activa */}
      {categories.map((category) => (
        <TabsContent key={category.value} value={category.value}>
          {/* Tarjeta (Card) que muestra los detalles de la categoría */}
          <Card>
            <CardHeader>
              {/* Título y descripción de la categoría */}
              <CardTitle>{category.title}</CardTitle>
              <CardDescription>{category.description}</CardDescription>
            </CardHeader>

            <CardContent className="space-y-2">
              {/* Muestra el precio de la categoría */}
              <div>
                <p className="text-xl font-bold">
                  Price: ${prices[category.value as keyof typeof prices]}
                </p>
              </div>

              {/* Muestra los beneficios de la categoría en una lista */}
              <div>
                <p className="font-semibold">Benefits:</p>
                <ul className="list-disc ml-5">
                  {category.benefits.map((benefit, index) => (
                    <li key={index}>{benefit}</li> // Cada beneficio es mostrado como un ítem de lista
                  ))}
                </ul>
              </div>
            </CardContent>

            <CardFooter>
              {/* Botón que selecciona la categoría y cierra el diálogo */}
              <DialogClose asChild>
                <Button onClick={() => setSelectedCategory(category)}>
                  Select {category.title} {/* Muestra el botón para seleccionar la categoría */}
                </Button>
              </DialogClose>
            </CardFooter>
          </Card>
        </TabsContent>
      ))}
    </Tabs>
  );
};

export default Category;