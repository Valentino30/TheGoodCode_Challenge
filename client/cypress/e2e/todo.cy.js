describe("todos", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  // todo: mock api calls
  it("adds, completes and deletes a todo", () => {
    cy.findByRole("textbox").type("Football").type("{enter}");
    cy.findByText(/football/i).should("exist");
    cy.findByRole("checkbox").click();
    cy.findByRole("checkbox").should("be.checked");
    cy.findByRole("button", { name: /delete/i }).click();
    cy.findByText(/football/i).should("not.exist");
  });
});
