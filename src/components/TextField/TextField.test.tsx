import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import TextField from ".";

describe("TextField Component", () => {
  test("renders medium sized TextField by default", () => {
    const onChange = jest.fn();

    render(<TextField value="" onChange={onChange} />);

    const inputElement = screen.getByPlaceholderText("");
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveClass("textfield-input--medium");
  });

  test("renders small sized TextField", () => {
    const onChange = jest.fn();

    render(<TextField value="" onChange={onChange} size="small" />);

    const inputElement = screen.getByPlaceholderText("");
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveClass("textfield-input--small");
  });

  test("renders large sized TextField with label", () => {
    const onChange = jest.fn();

    render(
      <TextField value="" onChange={onChange} label="Label" size="large" />
    );

    const labelElement = screen.getByText("Label");
    const inputElement = screen.getByPlaceholderText("");

    expect(labelElement).toBeInTheDocument();
    expect(labelElement).toHaveClass("textfield-label--large");
    expect(inputElement).toHaveClass("textfield-input--large");
  });

  test("able to type into TextField", () => {
    const onChange = jest.fn();

    render(<TextField value="" onChange={onChange} />);

    const inputElement = screen.getByPlaceholderText("");
    fireEvent.change(inputElement, { target: { value: "Test" } });

    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenCalledWith("Test");
  });
});
