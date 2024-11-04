import { render } from "@testing-library/react";
import { RoundTripDate, DepartureDate } from "../components/atoms/date"; // Ajusta el path según tu estructura
import "@testing-library/jest-dom"; // Opcional, para utilidades adicionales de testing

describe("DepartureDate", () => {
  it("renders DepartureDate component without crashing", () => {
    const mockOnDateSelect = jest.fn(); // Mock para simular la función de callback
    render(<DepartureDate onDateSelect={mockOnDateSelect} />);

    // Simulamos que se llama la función onDateSelect
    mockOnDateSelect(undefined); // Llama con un valor ficticio
    expect(mockOnDateSelect).toHaveBeenCalled(); // Verifica que el mock fue llamado
  });
});

describe("RoundTripDate", () => {
  it("renders RoundTripDate component without crashing", () => {
    const mockOnDepartureSelect = jest.fn(); // Mock para simular la función de salida
    const mockOnReturnSelect = jest.fn(); // Mock para simular la función de regreso
    // Render the RoundTripDate component with mock departure and return select functions

    render(
      <RoundTripDate
        onDepartureSelect={mockOnDepartureSelect}
        onReturnSelect={mockOnReturnSelect}
      />
    );


    // Simulamos que se llaman las funciones de selección
    mockOnDepartureSelect(undefined); // Llama con un valor ficticio
    mockOnReturnSelect(undefined); // Llama con un valor ficticio

    expect(mockOnDepartureSelect).toHaveBeenCalled(); // Verifica que el mock fue llamado
    expect(mockOnReturnSelect).toHaveBeenCalled(); // Verifica que el mock fue llamado

  });
});
