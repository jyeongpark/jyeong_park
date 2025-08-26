import {
  loadIntroData,
  loadContactData,
  loadWorkExperienceData,
  loadActivityData,
  loadEducationData,
  loadSkillData,
} from "@/_contents";

import {
  Intro,
  Contact,
  WorkExperience,
  Education,
  Activity,
  Skill,
} from "@/_components";

export default async function Home() {
  const [
    introData,
    contactData,
    workExperienceData,
    activityData,
    educationData,
    skillData,
  ] = await Promise.all([
    loadIntroData(),
    loadContactData(),
    loadWorkExperienceData(),
    loadActivityData(),
    loadEducationData(),
    loadSkillData(),
  ]);

  return (
    <>
      <Intro data={introData} />
      <Contact data={contactData} />
      <WorkExperience data={workExperienceData} />
      <Activity data={activityData} />
      <Education data={educationData} />
      <Skill data={skillData} />
    </>
  );
}
