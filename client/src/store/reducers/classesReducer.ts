import api from "@/utilities/api";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { isAxiosError } from "axios";
import { Class, ClassState } from "@/store/interface/classes";

export const getAllClasses = createAsyncThunk(
  "classes/get_all_classes",
  async (
    info: { userId: number, filter?: string, offset?: number, limit?: number } = { userId: 0 },
    { rejectWithValue, fulfillWithValue }
  ) => {
    try {
      const params = { userId: info.userId, filter: info.filter, offset: info.offset, limit: info.limit };
      const { data } = await api.get(`/classes/${info.userId}`, { params, withCredentials: true, headers: { Authorization: `Bearer ${localStorage.getItem("accessToken")}` } } );
      return fulfillWithValue({ classes: data.classes});
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

export const countAllClasses = createAsyncThunk(
  "classes/count_all_classes",
  async (
    info: { userId: number, filter?: string} = { userId: 0 },
    { rejectWithValue, fulfillWithValue }
  ) => {
    try {
      const params = { userId: info.userId, filter: info.filter};
      const { data } = await api.get(`/classes/${info.userId}`, { params, withCredentials: true, headers: { Authorization: `Bearer ${localStorage.getItem("accessToken")}` } } );
      return fulfillWithValue(data.count);
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

const initialState: ClassState = {
  classesForParticipant: [],
  loading: false,
  error: null,
  count: 0,
};

const classesSlice = createSlice({
  name: "classes",
  initialState,
  reducers: {
    classesReset: (state) => {
      state.classesForParticipant = [];
      state.loading = true;
      state.error = null;
      state.count = 0;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllClasses.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getAllClasses.fulfilled, (state, action: PayloadAction<{ classes: Class[] }>) => {
      state.loading = false;
      state.classesForParticipant = action.payload.classes;
    });
    builder.addCase(getAllClasses.rejected, (state, action) => {
      state.loading = false;
      state.error = typeof action.payload === 'string' ? action.payload : "Unknown error";
    });
    builder.addCase(countAllClasses.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(countAllClasses.fulfilled, (state, action: PayloadAction<number>) => {
      state.loading = false;
      state.count = action.payload;
    });
    builder.addCase(countAllClasses.rejected, (state, action) => {
      state.loading = false;
      state.error = typeof action.payload === 'string' ? action.payload : "Unknown error";
    });
  },
});

export const { classesReset } = classesSlice.actions;
export default classesSlice.reducer;

