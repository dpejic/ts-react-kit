import { render, fireEvent } from "@testing-library/react";
import Button from "./Button";

describe("Button", () => {
  it("renders text correctly", () => {
    const { getByRole } = render(
      <Button text='Click me!' onClick={() => {}} />
    );
    const button = getByRole("button", { name: "Click me!" });
    expect(button).toBeInTheDocument();
  });

  it("calls onClick event handler", () => {
    const onClick = jest.fn();
    const { getByRole } = render(<Button text='Click me!' onClick={onClick} />);
    const button = getByRole("button", { name: "Click me!" });
    fireEvent.click(button);
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
