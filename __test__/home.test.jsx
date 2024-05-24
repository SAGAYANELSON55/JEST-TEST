import "@testing-library/jest-dom";
import { screen, render } from "@testing-library/react";
import Home from "../src/app/page";

describe("Home", () => {
  it("renders a heading", () => {
    render(<Home />);

    const heading = screen.getByRole("heading", { level: 2, name: "Learn" });

    expect(heading).toBeInTheDocument();
  });
  it('contain the text "information"', () => {
    render(<Home />);
    const text = screen.getByText(/information/i);

    expect(text).toBeInTheDocument();
  });
});
