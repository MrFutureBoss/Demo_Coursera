import api from '@/utilities/api';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { isAxiosError } from 'axios';
import { Lesson, LessonsState } from '@/store/interface/lessons';

export const get_lesson_by_course_id = createAsyncThunk(
  'lessons/get_lesson_by_course_id',
  async (
    info: { id: number | string } = { id: 0 },
    { rejectWithValue, fulfillWithValue }
  ) => {
    try {
      const params = { id: info.id };
      const { data } = await api.get(`/lessons/${info.id}/course`, { params });
      console.log("Redux lesson by course id: ",data.data);
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

export const get_lesson_by_lesson_id = createAsyncThunk(
  'lessons/get_lesson_by_lesson_id',
  async (
    info: { id: number | string } = { id: 0 },
    { rejectWithValue, fulfillWithValue }
  ) => {
    try {
      const params = { id: info.id };
      const { data } = await api.get(`/lessons/${info.id}`, { params });
      console.log("Redux lesson by lesson id: ",data.data);
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

const initialState: LessonsState = {
  lessons: [],
  loading: false,
  error: null,
  lesson: null,
};

const lessonsSlice = createSlice({
  name: 'lessons',
  initialState,
  reducers: {
    lessonsReset: (state) => {
      state.lessons = [];
      state.loading = true;
      state.error = null;
      state.lesson = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(get_lesson_by_course_id.pending, (state) => {
        state.loading = true;
      })
      .addCase(get_lesson_by_course_id.fulfilled, (state, action: PayloadAction<Lesson[]>) => {
        state.loading = false;
        state.lessons = Array.isArray(action.payload) ? action.payload : [];
      })
      .addCase(get_lesson_by_course_id.rejected, (state, action: PayloadAction<unknown>) => {
        state.loading = false;
        state.error = typeof action.payload === 'string' ? action.payload : "Unknown error";
      })
      .addCase(get_lesson_by_lesson_id.pending, (state) => {
        state.loading = true;
      })
      .addCase(get_lesson_by_lesson_id.fulfilled, (state, action: PayloadAction<Lesson>) => {
        state.loading = false;
        state.lesson = action.payload;
      })
      .addCase(get_lesson_by_lesson_id.rejected, (state, action: PayloadAction<unknown>) => {
        state.loading = false;
        state.error = typeof action.payload === 'string' ? action.payload : "Unknown error";
      })
  },
});

export const { lessonsReset } = lessonsSlice.actions;
export default lessonsSlice.reducer;
