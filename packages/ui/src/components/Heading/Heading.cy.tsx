import React from "react";
import { Heading } from "./Heading";
import { tokens } from "@repo/theme";

const hexToRgb = (hex: string) => {
  const [r, g, b] = hex
    .replace("#", "")
    .match(/.{1,2}/g)!
    .map((x) => parseInt(x, 16));
  return `rgb(${r}, ${g}, ${b})`;
};

describe("<Heading /> 렌더링 확인", () => {
  it("기본 색상 확인", () => {
    cy.mount(<Heading color="default" size="lg" text="제목" />);

    cy.dataCy("Heading").should("contain.text", "제목");
    // 색상 확인
    cy.dataCy("Heading").should("have.css", "color", hexToRgb(tokens.color.fg));
  });

  it("primary 색상 확인", () => {
    cy.mount(<Heading color="primary" size="lg" text="제목" />);

    cy.dataCy("Heading").should("contain.text", "제목");
    cy.dataCy("Heading").should(
      "have.css",
      "color",
      hexToRgb(tokens.color.primary)
    );
  });

  it("xl 크기 확인", () => {
    cy.mount(<Heading color="default" size="xl" text="제목" />);
    cy.dataCy("Heading").should("have.css", "font-size", tokens.fontSize.xl);
  });

  it("lg 크기 확인", () => {
    cy.mount(<Heading color="default" size="lg" text="제목" />);
    cy.dataCy("Heading").should("have.css", "font-size", tokens.fontSize.lg);
  });

  it("xl 글자 강조 확인", () => {
    cy.mount(
      <Heading color="default" size="xl" text="제목 <strong>강조</strong>" />
    );
    cy.dataCy("Heading").should("contain.text", "제목");
    cy.dataCy("Heading").find("strong").should("contain.text", "강조");
  });
});
