import { fireEvent, render, screen } from "@testing-library/react";
import { describe, it, vi } from "vitest";

import Form from ".";
import Input from "../Input";

describe("Form Component", () => {
  let form: HTMLFormElement;
  const onSubmit = vi.fn();
  const onChange = vi.fn();

  it("Renders correctly", () => {
    render(
      <Form onSubmit={onSubmit}>
        <Input
          type="text"
          value="value"
          onChange={onChange}
          placeholder="Search Movie"
        />
      </Form>
    );
    form = screen.getByRole("form");
    expect(form).toBeInTheDocument();
  });

  it("Calls onSubmit prop when submitted", () => {
    render(<Form onSubmit={onSubmit} />);
    form = screen.getByRole("form");
    fireEvent.submit(form);
    expect(onSubmit).toHaveBeenCalledTimes(1);
  });
});
