import { render, screen, fireEvent } from "@testing-library/react";
import Register from "./Register";

describe("Register component", () => {
  it("should render Register component correctly", () => {
    render(<Register />);
    const element = screen.getByRole("heading", {
      level: 2
    });
    expect(element).toBeInTheDocument();
  });

  it("should test for presence of subheading in the component", () => {
    render(<Register />);
    const element = screen.getByRole("heading", {
      name: /please enter your details below to register yourself\./i
    });
    expect(element).toBeInTheDocument();
  });

  it("should show error message when all the fields are not entered", () => {
    render(<Register />);
    const buttonElement = screen.getByRole("button", {
      name: /register/i
    });
    fireEvent.click(buttonElement); // Use fireEvent to simulate button click
    const alertElement = screen.getByRole("alert");
    expect(alertElement).toBeInTheDocument();
  });

  it("should not show any error message when the component is loaded", () => {
    render(<Register />);
    const alertElement = screen.queryByRole("alert");
    expect(alertElement).not.toBeInTheDocument();
  });

  it("should show success message when the registration is successful.", () => {
    render(<Register />);
    const buttonElement = screen.getByRole("button", {
      name: /register/i
    });
    fireEvent.click(buttonElement); // Use fireEvent to simulate button click
    const alertElement = screen.getByRole("alert");
    expect(alertElement).toBeInTheDocument();
  });
});
