import { CourseApi } from "@/components/cards/CardProducts";

export interface CoursesState {
  courses: CourseApi[];
  loading: boolean;
  error: string | null;
}

export interface RootState {
  courses: CoursesState;
}

// Thunk parameter type for get_all_courses
export interface GetAllCoursesParams {
  offset: number;
  limit: number;
}

