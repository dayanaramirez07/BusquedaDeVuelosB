import React from "react";
import { render, screen } from "@testing-library/react";
import FlightCard from "../components/molecules/flightCard";
import Flight from "@/utils/interface/flight";

const flightMock = jest.mocked<Flight>({
  origin: "Medellín",
  destination: "Bogotá",
  time: "19:20:00T",
  scales: 2,
  date: "19/10/2024",
  prices: {
    first: 10,
    business: 8,
    economy: 5,
  },
});

describe("FlightCard Component", () => {
  test("renders FlightCard component", () => {
    // Render the FlightCard component with a mock flight object
    render(<FlightCard flight={flightMock} />);
    
    // Check if the text "Destination" is in the document
    expect(screen.getByText(/Destination/)).toBeInTheDocument();
    
    // Check if the text "Origin" is in the document
    expect(screen.getByText(/Origin/)).toBeInTheDocument();
    
    // Check if the text "Date and time" is in the document
    expect(screen.getByText(/Date and time/)).toBeInTheDocument();
    
    // Check if the text "Number of scales" is in the document
    expect(screen.getByText(/Number of scales/)).toBeInTheDocument();
    
    // Check if the text "Category" is in the document
    expect(screen.getByText(/Category/)).toBeInTheDocument();
    
    // Check if the text "Reserve" is in the document
    expect(screen.getByText(/Reserve/)).toBeInTheDocument();
  });
});
