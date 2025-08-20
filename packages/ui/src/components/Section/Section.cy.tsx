import React from 'react';
import { Section } from './Section';

describe('<Section />', () => {
  it('renders', () => {
    cy.mount(<Section />);
    cy.dataCy("Section").should("be.visible");
  });
});
