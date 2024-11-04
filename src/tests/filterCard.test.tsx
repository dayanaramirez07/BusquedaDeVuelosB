import React from "react";
import FilterCard from "../components/molecules/filterCard";
import { render, screen } from "@testing-library/react";

const onScalesChangeFn = jest.fn();

describe("FilterCard", () => {
  it("renders FilterCard component", () => {
    // Render the FilterCard component with a mock scales change function
    render(<FilterCard onScalesChange={onScalesChangeFn} />);
    
    // Check if the text "Filters" is in the document
    expect(screen.getByText("Filters")).toBeInTheDocument();
  });
});
