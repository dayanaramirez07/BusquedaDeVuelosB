import React from "react";
import { render, screen } from "@testing-library/react";
import SearchCard from "../components/molecules/searchCard";

const searchFnMock = jest.fn();

describe("SearchCard Component", () => {
  test("renders the SearchCard component", () => {
    // Render the SearchCard component with a mock search function
    render(<SearchCard onSearch={searchFnMock} />);
    
    // Check if the text "Flight search" is in the document
    expect(screen.getByText("Flight search")).toBeInTheDocument();
    
    // Check if the text "Find the flight you need" is in the document
    expect(screen.getByText("Find the flight you need")).toBeInTheDocument();
  });
});
