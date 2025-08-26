"use client";

import { SkillData } from "@/_contents";
import styled from "@emotion/styled";
import { BulletList, Heading, Section } from "@repo/ui";
import React from "react";

export default function Skill({ data }: { data: SkillData }) {
  const skillData = data.list.map((skill) => ({
    title: { text: skill.title },
    items: skill.skills.map((skill) => ({
      label: skill,
    })),
  }));

  return (
    <Section>
      <Heading color="primary" size="xl" text="Skills." />
      <SkillWrapper>
        {skillData.map((skill) => (
          <BulletList {...skill} key={skill.title.text} />
        ))}
      </SkillWrapper>
    </Section>
  );
}

const SkillWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.spacing(2)};
  flex-wrap: wrap;
`;
