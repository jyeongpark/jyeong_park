import { Link } from "./Link";

describe("<Link />", () => {
  it("renders", () => {
    cy.mount(
      <Link
        size="sm"
        fontWeight="bold"
        text="링크 이동합니다."
        href="https://www.google.com"
      />
    );
    cy.dataCy("Link").should("be.visible");
    cy.dataCy("Link").should("have.attr", "href", "https://www.google.com");
    cy.dataCy("Link").should("have.attr", "target", "_blank");
    cy.dataCy("Link").should("have.attr", "rel", "noopener noreferrer");
  });
});
