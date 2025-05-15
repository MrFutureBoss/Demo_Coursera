import { configureStore } from '@reduxjs/toolkit';
import { persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import { persistedTestReducer } from './reducers/testReducer';
import courseReducer from './reducers/courseReducer';
import lessonReducer from './reducers/lessonReducer';
import materialReducer from './reducers/materialReducer';
import sectionReducer from './reducers/sectionReducer';
import authenReducer from './reducers/authenReducer';
import classesReducer from './reducers/classesReducer';

const combinedReducer = {
  course: courseReducer,
  lesson: lessonReducer,
  material: materialReducer,
  section: sectionReducer,
  test: persistedTestReducer,
  classes: classesReducer,
  authen: authenReducer,
};

const store = configureStore({
  reducer: combinedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: true,
});

export type AppDispatch = typeof store.dispatch;
export const persistor = persistStore(store);
export default store;
