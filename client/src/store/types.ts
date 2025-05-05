// Removed CourseApi import and usages after migration to Course type in reducers
// If you need a course type, import from '@/store/reducers/courseReducer'

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
