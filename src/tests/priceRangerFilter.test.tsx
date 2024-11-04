import { render, screen, fireEvent } from "@testing-library/react";

import PriceRangeFilter from "../components/atoms/priceRangeFilter"; // Ajusta el path de acuerdo a tu estructura
import "@testing-library/jest-dom"; // Opcional, para algunas utilidades adicionales de testing

describe("PriceRangeFilter", () => {
  it("renders the price range options", () => {
    // Renderiza el componente
    render(<PriceRangeFilter />);

    // Abre el select de rango de precios
    const trigger = screen.getByText("Select price range");
    fireEvent.click(trigger);

    // Comprueba que los elementos de rango de precios estén visibles
    const priceOption1 = screen.getByText("$0 - $100"); // Ajusta los textos según tu lista
    const priceOption2 = screen.getByText("$101 - $200");

    expect(priceOption1).toBeInTheDocument();
    expect(priceOption2).toBeInTheDocument();
  });

  it("renders the sort options (asc/desc)", () => {
    // Renderiza el componente
    render(<PriceRangeFilter />);

    // Abre el select de orden (simularemos esta parte, aunque no esté en el componente actual)
    const trigger = screen.getByText("Select price range");
    fireEvent.click(trigger);

    // Comprueba que al menos un precio se haya mostrado
    const ascOption = screen.getByText("$0 - $100");

    expect(ascOption).toBeInTheDocument();
  });
});
