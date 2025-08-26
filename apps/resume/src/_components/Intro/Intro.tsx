"use client";

import React from "react";
import { IntroData } from "@/_contents";
import { BulletList, Heading, Section } from "@repo/ui";

export default function Intro({ data }: { data: IntroData }) {
  const items = data.description.split("\n").map((line) => ({ label: line }));
  return (
    <Section>
      <Heading color="default" size="xl" text={data.title} />
      <BulletList items={items} />
    </Section>
  );
}
