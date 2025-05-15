"use client";

import { HoverableText } from "../HoverableText";
import ExperienceItem from "./ExperienceItem";
import ProjectItem from "./ProjectItem";
import { useExperience } from "./useExperience";

const defaultTitleText = "Crafting good code";
const hiddenTitleText = "Being honest is not all code";

export function Experience() {
  const { experiences, projects } = useExperience();

  return (
    <div className="flex flex-col gap-12 w-full" id="experience">
      <HoverableText
        defaultText={defaultTitleText}
        hiddenText={hiddenTitleText}
        className="text-4xl font-semibold"
      />

      <div className="grid grid-cols-1 gap-8 md:grid-cols-1 lg:grid-cols-1">
        <div>
          <h2 className="text-2xl font-bold mb-6 inline-block border-b-2 border-primary pb-1">
            Work Experience
          </h2>
          <div>
            {experiences.map((exp) => (
              <ExperienceItem
                key={exp.id}
                companyName={exp.company_name}
                location={exp.location}
                position={exp.position}
                startDate={exp.start_date}
                endDate={exp.end_date}
                details={exp.details}
              />
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-6 inline-block border-b-2 border-secondary pb-1">
            Projects & Contributions
          </h2>
          <div>
            {projects.map((project) => (
              <ProjectItem
                key={project.id}
                startDate={project.start_date}
                endDate={project.end_date}
                details={project.details}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
