import React from "react";
import { DateText } from "./DateText";

describe("<DateText />", () => {
  it("renders", () => {
    cy.mount(<DateText startDate="2021.01" />);
    cy.dataCy("DateText").should("be.visible");
    cy.dataCy("DateText").should("contain.text", "현재");
    cy.dataCy("DateText").should("contain.text", "2021.01");
  });
  it("renders with endDate", () => {
    cy.mount(<DateText startDate="2021.01" endDate="2022.01" />);
    cy.dataCy("DateText").should("contain.text", "2021.01");
    cy.dataCy("DateText").should("contain.text", "2022.01");
  });
});
