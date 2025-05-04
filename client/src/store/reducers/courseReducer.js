import api from "@/utilities/api";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const get_all_courses = createAsyncThunk(
  "courses/get_all_courses",
  async (
    info = { offset: 0, limit: 8 },
    { rejectWithValue, fulfillWithValue }
  ) => {
    try {
      const params = { offset: info.offset, limit: info.limit };
      const { data } = await api.get(`/courses`, { params });
      console.log(data);
      return fulfillWithValue(data);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const coursesReducer = createSlice({
  name: "courses",
  initialState: {
    courses: [],
    loading: true, // Luôn loading ngay từ đầu
    error: null,
  },
  reducers: {
    coursesReset: (state) => {
      state.courses = [];
      state.loading = true; // Khi reset, cũng loading lại
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(get_all_courses.pending, (state) => {
        state.loading = true;
      })
      .addCase(get_all_courses.fulfilled, (state, action) => {
        state.loading = false;
        // Only store the array of courses, not the whole API object
        state.courses = Array.isArray(action.payload.data) ? action.payload.data : [];
      })
      .addCase(get_all_courses.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});
