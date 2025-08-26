"use client";

import React from "react";
import { ContactData } from "@/_contents";
import { Description, Heading, Section, Link } from "@repo/ui";
import styled from "@emotion/styled";

export default function Contact({ data }: { data: ContactData }) {
  return (
    <Section>
      <Heading color="primary" size="xl" text="Contact." />
      {Object.entries(data).map(([key, value]) => (
        <ContactItem key={key}>
          <Description text={key} size="md" fontWeight="regular" />
          {value.link && (
            <Link
              href={value.link}
              size="md"
              text={value.value}
              fontWeight="regular"
            />
          )}
          {!value.link && (
            <Description text={value.value} size="md" fontWeight="regular" />
          )}
        </ContactItem>
      ))}
    </Section>
  );
}

const ContactItem = styled.div`
  display: grid;
  grid-template-columns: 70px 1fr;
  gap: ${({ theme }) => theme.spacing(2)};
  align-items: center;
`;
