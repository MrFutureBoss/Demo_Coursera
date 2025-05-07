import { combineReducers } from '@reduxjs/toolkit';
import courseReducer from './reducers/courseReducer';
import lessonReducer from './reducers/lessonReducer';
import sectionReducer from './reducers/sectionReducer';

const rootReducer = combineReducers({
  course: courseReducer,
  lesson: lessonReducer,
  section: sectionReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
