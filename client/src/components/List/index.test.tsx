import { render, screen } from "@testing-library/react";
import { describe, it } from "vitest";

import List from ".";

describe("List Component", () => {
  let list: HTMLUListElement;

  it("Renders correctly", () => {
    render(<List />);
    list = screen.getByRole("list");
    expect(list).toBeInTheDocument();
  });
});
