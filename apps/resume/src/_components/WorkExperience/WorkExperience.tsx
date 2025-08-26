"use client";

import React from "react";
import { WorkExperienceData } from "@/_contents";
import { BulletList, DateText, Description, Heading, Section } from "@repo/ui";
import styled from "@emotion/styled";

export default function WorkExperience({ data }: { data: WorkExperienceData }) {
  return (
    <Section>
      <Heading color="primary" size="xl" text="WorkExperiences." />
      {data.list.map((company) => (
        <WorkExperienceWrapper key={company.name}>
          <CompanyWrapper className="divider">
            <CompanyHeading>
              <Heading color="default" size="xl" text={company.name} />
              <DateText {...company} size="sm" />
            </CompanyHeading>
            <CompanyContent>
              <Description
                text={company.position}
                size="sm"
                fontWeight="regular"
              />
              <Description
                text={company.description}
                size="md"
                fontWeight="regular"
              />
            </CompanyContent>
          </CompanyWrapper>
          <WorkExperienceList>
            {company.experience.map((experience, idx) => (
              <BulletList
                key={`work-experience-${company.name}-${idx}`}
                {...experience}
              />
            ))}
          </WorkExperienceList>
        </WorkExperienceWrapper>
      ))}
    </Section>
  );
}

const WorkExperienceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(3)};
`;

const CompanyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(2)};
`;

const CompanyHeading = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(2)};
`;

const CompanyContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(1)};
`;

const WorkExperienceList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(2)};
`;
