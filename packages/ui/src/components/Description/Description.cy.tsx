import React from "react";
import { Description } from "./Description";

describe("<Description />", () => {
  it("renders", () => {
    const description = "description <strong>strong</strong>";
    cy.mount(<Description size="md" text={description} />);
    cy.dataCy("Description").should("be.visible");
    cy.dataCy("Description").find("strong").should("be.visible");
  });
});
