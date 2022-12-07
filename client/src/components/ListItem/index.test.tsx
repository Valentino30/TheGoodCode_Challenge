import { render, screen } from "@testing-library/react";
import { describe, it } from "vitest";

import ListItem from ".";

describe("ListItem Component", () => {
  let listItem: HTMLLIElement;

  it("Renders correctly", () => {
    render(<ListItem />);
    listItem = screen.getByRole("listitem");
    expect(listItem).toBeInTheDocument();
  });
});
