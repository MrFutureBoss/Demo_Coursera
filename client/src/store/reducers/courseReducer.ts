import api from '@/utilities/api';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

// Types for course and error
export interface Course {
  id: number;
  [key: string]: any;
}

export interface CoursesState {
  courses: Course[];
  loading: boolean;
  error: any;
  course: Course | Record<string, any>;
}

// No CourseApi references remain. All types are defined in this file.

// Async thunks
export const get_all_courses = createAsyncThunk(
  'courses/get_all_courses',
  async (
    info: { offset?: number; limit?: number } = { offset: 0, limit: 8 },
    { rejectWithValue, fulfillWithValue }
  ) => {
    try {
      const params = { offset: info.offset, limit: info.limit };
      const { data } = await api.get(`/courses`, { params });
      console.log(data);
      return fulfillWithValue(data);
    } catch (error: any) {
      return rejectWithValue(error.response?.data ?? error.message);
    }
  }
);

export const get_course_by_id = createAsyncThunk(
  'courses/get_course_by_id',
  async (
    info: { id: number | string } = { id: 0 },
    { rejectWithValue, fulfillWithValue }
  ) => {
    try {
      const params = { id: info.id };
      const { data } = await api.get(`/courses/${info.id}`, { params });
      console.log(data);
      return fulfillWithValue(data);
    } catch (error: any) {
      return rejectWithValue(error.response?.data ?? error.message);
    }
  }
);

const initialState: CoursesState = {
  courses: [],
  loading: true,
  error: null,
  course: {},
};

const coursesSlice = createSlice({
  name: 'courses',
  initialState,
  reducers: {
    coursesReset: (state) => {
      state.courses = [];
      state.loading = true;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(get_all_courses.pending, (state) => {
        state.loading = true;
      })
      .addCase(get_all_courses.fulfilled, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.courses = Array.isArray(action.payload.data) ? action.payload.data : [];
      })
      .addCase(get_all_courses.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(get_course_by_id.pending, (state) => {
        state.loading = true;
      })
      .addCase(get_course_by_id.fulfilled, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.course = action.payload;
      })
      .addCase(get_course_by_id.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { coursesReset } = coursesSlice.actions;
export default coursesSlice.reducer;
