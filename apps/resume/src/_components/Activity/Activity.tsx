"use client";

import React from "react";
import { ActivityData } from "@/_contents";
import {
  BulletList,
  DateText,
  Description,
  Heading,
  Link,
  Section,
} from "@repo/ui";
import styled from "@emotion/styled";

export default function Activity({ data }: { data: ActivityData }) {
  return (
    <Section>
      <Heading color="primary" size="xl" text="Activities." />
      {data.list.map((activity) => (
        <ActivityWrapper key={activity.title}>
          <ActivityHeading className="divider">
            <ActivityTitle>
              <Heading color="default" size="lg" text={activity.title} />
              <DateText
                startDate={activity.startDate}
                endDate={activity.endDate}
                size="sm"
              />
            </ActivityTitle>
            <ActivityContent>
              {activity.link && (
                <Link
                  href={activity.link}
                  text={activity.link}
                  size="sm"
                  fontWeight="regular"
                />
              )}
              <Description
                text={activity.description}
                size="sm"
                fontWeight="regular"
              />
            </ActivityContent>
          </ActivityHeading>
          <ActivityList>
            {activity.experience.map((experience, idx) => (
              <BulletList
                key={`activity-${activity.title}-${idx}`}
                {...experience}
              />
            ))}
          </ActivityList>
        </ActivityWrapper>
      ))}
    </Section>
  );
}

const ActivityWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(3)};
`;

const ActivityHeading = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(2)};
`;

const ActivityTitle = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(2)};
`;

const ActivityContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(2)};
`;

const ActivityList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(2)};
`;
