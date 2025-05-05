import { combineReducers } from '@reduxjs/toolkit';
import courseReducer from './reducers/courseReducer';
import type { Course, CoursesState } from './reducers/courseReducer';

const rootReducer = combineReducers({
  course: courseReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
