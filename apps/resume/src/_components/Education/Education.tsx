"use client";

import React from "react";
import { EducationData } from "@/_contents";
import { BulletList, DateText, Heading, Section } from "@repo/ui";
import styled from "@emotion/styled";

export default function Education({ data }: { data: EducationData }) {
  return (
    <Section
      style={{
        pageBreakInside: "avoid" /* 중간 잘림 방지 */,
      }}
    >
      <Heading color="primary" size="xl" text="Education." />
      {data.list.map((education, idx, list) => (
        <EducationWrapper
          key={education.title}
          className={idx !== list.length - 1 ? "divider" : ""}
        >
          <EducationHeading>
            <Heading color="default" size="lg" text={education.title} />
            <DateText
              startDate={education.startDate}
              endDate={education.endDate}
              size="sm"
            />
          </EducationHeading>
          <EducationList>
            {education.experience.map((experience, idx) => (
              <BulletList
                key={`work-experience-${education.title}-${idx}`}
                {...experience}
              />
            ))}
          </EducationList>
        </EducationWrapper>
      ))}
    </Section>
  );
}

const EducationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(3)};
`;

const EducationHeading = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(2)};
`;

const EducationList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(2)};
`;
