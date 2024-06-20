import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Button from ".";

describe("Button Component", () => {
  test("renders medium sized button by default with label", () => {
    render(<Button label="Button" />);

    const buttonElement = screen.getByText("Button");

    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveClass("button--medium");
  });

  test("renders small primary button", () => {
    render(<Button label="Small Primary Button" size="small" primary />);

    const buttonElement = screen.getByText("Small Primary Button");

    expect(buttonElement).toHaveClass("button--small");
    expect(buttonElement).toHaveClass("button--primary");
  });

  test("renders large button with custom background color", () => {
    render(<Button label="Large Button" size="large" backgroundColor="blue" />);

    const buttonElement = screen.getByText("Large Button");

    expect(buttonElement).toHaveClass("button--large");
    expect(buttonElement).toHaveStyle({ backgroundColor: "blue" });
  });
});
