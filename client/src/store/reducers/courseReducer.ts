import api from '@/utilities/api';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { isAxiosError } from 'axios';
import { Course, CoursesState } from '@/store/interface/courses';

export const get_all_courses = createAsyncThunk(
  'courses/get_all_courses',
  async (
    info: { offset?: number; limit?: number } = { offset: 0, limit: 8 },
    { rejectWithValue, fulfillWithValue }
  ) => {
    try {
      const params = { offset: info.offset, limit: info.limit };
      const { data } = await api.get(`/courses`, { params });
      console.log("Redux: ",data.data);
      return fulfillWithValue(data.data);
    } catch (error: unknown) {
  if (isAxiosError(error)) {
    return rejectWithValue(error.response?.data ?? error.message);
  }
  if (error instanceof Error) {
    return rejectWithValue(error.message);
  }
  return rejectWithValue(String(error));

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
      console.log("Redux: ",data.data);
      return fulfillWithValue(data.data);
    } catch (error: unknown) {
  if (isAxiosError(error)) {
    return rejectWithValue(error.response?.data ?? error.message);
  }
  if (error instanceof Error) {
    return rejectWithValue(error.message);
  }
  return rejectWithValue(String(error));

    }
  }
);

const initialState: CoursesState = {
  courses: [],
  loading: false,
  error: null,
  course: null,
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
      .addCase(get_all_courses.fulfilled, (state, action: PayloadAction<Course[]>) => {
        state.loading = false;
        state.courses = Array.isArray(action.payload) ? action.payload : [];
      })
      .addCase(get_all_courses.rejected, (state, action: PayloadAction<unknown>) => {
        state.loading = false;
        state.error = typeof action.payload === 'string' ? action.payload : "Unknown error";
      })
      .addCase(get_course_by_id.pending, (state) => {
        state.loading = true;
      })
      .addCase(get_course_by_id.fulfilled, (state, action: PayloadAction<Course>) => {
        state.loading = false;
        state.course = action.payload;
      })
      .addCase(get_course_by_id.rejected, (state, action: PayloadAction<unknown>) => {
        state.loading = false;
        state.error = typeof action.payload === 'string' ? action.payload : "Unknown error";
      });
  },
});

export const { coursesReset } = coursesSlice.actions;
export default coursesSlice.reducer;
