describe("todos", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("adds, completes and deletes a todo", () => {
    cy.findByRole("textbox").type("Football").type("{enter}");
    cy.findByText(/football/i).should("exist");
    cy.get('[type="checkbox"]').check();
    cy.get('[type="checkbox"]').should("be.checked");
    cy.findByRole("button", { name: /delete/i }).click();
    cy.findByText(/football/i).should("not.exist");
  });
});
