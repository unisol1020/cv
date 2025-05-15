"use client";

import { createBrowserClient } from "@supabase/ssr";
import { useQuery } from "@tanstack/react-query";
import { Experience, ExperienceDetail, Project, ProjectDetail } from "./types";

interface ExperienceWithDetails extends Experience {
  details: ExperienceDetail[];
}

interface ProjectWithDetails extends Project {
  details: ProjectDetail[];
}

async function fetchExperienceData(): Promise<{
  experiences: ExperienceWithDetails[];
  projects: ProjectWithDetails[];
}> {
  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

  // Fetch experiences
  const { data: experiencesData, error: experiencesError } = await supabase
    .from("experiences")
    .select("*")
    .order("start_date", { ascending: false });

  if (experiencesError) {
    console.error("Error fetching experiences:", experiencesError);
    throw experiencesError;
  }

  // Fetch experience details
  const { data: experienceDetailsData, error: experienceDetailsError } =
    await supabase
      .from("experience_details")
      .select("*")
      .order("order_num", { ascending: true });

  if (experienceDetailsError) {
    console.error("Error fetching experience details:", experienceDetailsError);
    throw experienceDetailsError;
  }

  // Fetch projects
  const { data: projectsData, error: projectsError } = await supabase
    .from("projects")
    .select("*")
    .order("start_date", { ascending: false });

  if (projectsError) {
    console.error("Error fetching projects:", projectsError);
    throw projectsError;
  }

  // Fetch project details
  const { data: projectDetailsData, error: projectDetailsError } =
    await supabase
      .from("project_details")
      .select("*")
      .order("order_num", { ascending: true });

  if (projectDetailsError) {
    console.error("Error fetching project details:", projectDetailsError);
    throw projectDetailsError;
  }

  // Combine experiences with their details
  const experiences = experiencesData.map((experience) => ({
    ...experience,
    details: experienceDetailsData.filter(
      (detail) => detail.experience_id === experience.id
    ),
  }));

  // Combine projects with their details
  const projects = projectsData.map((project) => ({
    ...project,
    details: projectDetailsData.filter(
      (detail) => detail.project_id === project.id
    ),
  }));

  return { experiences, projects };
}

export function useExperience() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["experience-data"],
    queryFn: fetchExperienceData,
  });

  return {
    experiences: data?.experiences || [],
    projects: data?.projects || [],
    isLoading,
    error,
  };
}
