export interface Course {
  id: number;
  topic_name: string;
  banner: string;
  overview: string;
  type: string;
  team_group: string;
  description: string;
  team: string;
  version: string;
  language: string;
  start_time: string;
  end_time: string;
  status: string;
  updated_at: string;
  updated_by: number;
  certificate: number;
}
  
  export interface CoursesState {
  courses: Course[];
  loading: boolean;
  error: string | null;
  course: Course | null;
}