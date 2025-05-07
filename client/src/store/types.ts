

export interface CoursesState {
  courses: any[];
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
