import { CourseApi } from "@/components/cards/CardProducts";

export interface CoursesState {
  courses: CourseApi[];
  loading: boolean;
  error: unknown;
}

export interface RootState {
  courses: CoursesState;
}
      