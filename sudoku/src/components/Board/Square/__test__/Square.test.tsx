import React from "react";
import { render, screen } from "@testing-library/react";
import Square, { SquareProps } from "..";

let defaultTestProps: SquareProps = {
   index: 1,
   value: 5,
   isDisabled: false,
   onChange: jest.fn(),
};

describe("individual Squares on Board", () => {
   // describe("rendering", () => {
   //    render(<Square {...defaultTestProps} />);
   //    const squareElement = screen.getByTestId("board-square");

   it("should be displayed on the page", () => {
      render(<Square {...defaultTestProps} />);
      const squareElement = screen.getByTestId("board-square");
      expect(squareElement).toBeInTheDocument();
   });

   // it("should display the passed in value", () => {
   //    render(<Square {...defaultTestProps} />);
   //    const squareElement = screen.getByTestId("board-square");
   //    expect(squareElement).toHaveValue(5);
   // });
   // // });

   // // describe("interactivity and functionality", () => {
   // //    describe("using default props", () => {
   // // render(<Square {...defaultTestProps} />);
   // // const squareElement = screen.getByTestId("board-square");

   // it("should be interactive if isDisabled is false", () => {
   //    render(<Square {...defaultTestProps} />);
   //    const squareElement = screen.getByTestId("board-square");
   //    expect(squareElement).toBeEnabled();
   // });

   // it("should only allow the input of numbers", () => {
   //    render(<Square {...defaultTestProps} />);
   //    const squareElement = screen.getByTestId("board-square");
   //    expect(squareElement).toHaveAttribute("type", "number");
   // });

   // //    it("should fire an onChange function", () => {});
   // // });

   // // describe("using test case props", () => {

   // it("should be non-interactive if isDisabled is true", () => {
   //    let nonInteractiveProps = { ...defaultTestProps, isDisabled: true };
   //    render(<Square {...nonInteractiveProps} />);
   //    const squareElement = screen.getByTestId("board-square");
   //    expect(squareElement).toBeDisabled();
   // });
   // // });
   // });

   //    it("should only allow the input one digit", () => {});
});
