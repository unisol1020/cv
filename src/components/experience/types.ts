export interface Experience {
  id: number;
  company_name: string;
  location: string;
  position: string;
  start_date: string;
  end_date: string | null;
  created_at: string;
}

export interface ExperienceDetail {
  id: number;
  experience_id: number;
  description: string;
  order_num: number;
  created_at: string;
}

export interface Project {
  id: number;
  name: string;
  type: string;
  start_date: string;
  end_date: string | null;
  created_at: string;
}

export interface ProjectDetail {
  id: number;
  project_id: number;
  description: string;
  order_num: number;
  created_at: string;
}
