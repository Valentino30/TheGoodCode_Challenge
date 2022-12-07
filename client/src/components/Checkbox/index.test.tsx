import { render, screen } from "@testing-library/react";
import { describe, it } from "vitest";

import Checkbox from ".";

describe("Checkbox Component", () => {
  let checkbox: HTMLInputElement;

  it("Renders correctly", () => {
    render(<Checkbox />);
    checkbox = screen.getByRole("checkbox");
    expect(checkbox).toBeInTheDocument();
  });
});
