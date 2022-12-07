import { render, screen } from "@testing-library/react";
import { describe, it } from "vitest";

import Button from ".";

describe("Button Component", () => {
  let button: HTMLButtonElement;

  it("Renders correctly", () => {
    render(<Button>Click Me</Button>);
    button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });
});
