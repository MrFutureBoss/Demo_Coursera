import { combineReducers } from '@reduxjs/toolkit';
import courseReducer from './reducers/courseReducer';
import lessonReducer from './reducers/lessonReducer';
import materialReducer from './reducers/materialReducer';
import sectionReducer from './reducers/sectionReducer';
import testReducer from './reducers/testReducer';
import authenReducer from './reducers/authenReducer';
import classesReducer from './reducers/classesReducer';

const rootReducer = combineReducers({
  course: courseReducer,
  lesson: lessonReducer,
  material: materialReducer,
  section: sectionReducer,
  test: testReducer,
  authen: authenReducer,
  classes: classesReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
