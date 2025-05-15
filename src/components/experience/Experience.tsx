"use client";

import ExperienceItem from "./ExperienceItem";
import ProjectItem from "./ProjectItem";
import { useExperience } from "./useExperience";

export function Experience() {
  const { experiences, projects, isLoading } = useExperience();

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="animate-spin h-8 w-8 border-4 border-primary border-t-transparent rounded-full"></div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-4xl mx-auto px-4" id="experience">
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
