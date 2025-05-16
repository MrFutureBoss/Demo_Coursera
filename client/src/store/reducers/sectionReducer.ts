import api from "@/utilities/api";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { isAxiosError } from "axios";
import { Section, SectionsState } from "@/store/interface/sections";

export const get_section_by_section_id = createAsyncThunk(
  "sections/get_section_by_section_id",
  async (
    info: { id: number | string } = { id: 0 },
    { rejectWithValue, fulfillWithValue }
  ) => {
    try {
      const params = { id: info.id };
      const { data } = await api.get(`/sections/${info.id}/`, { params });
      console.log("Redux section by section id: ", data.data);
      return fulfillWithValue(Array.isArray(data.data) ? data.data[0] : data.data);
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

export const get_section_by_lesson_id = createAsyncThunk(
    "sections/get_section_by_lesson_id",
    async (
      info: { id: number | string } = { id: 0 },
      { rejectWithValue, fulfillWithValue }
    ) => {
      try {
        const params = { id: info.id };
        const { data } = await api.get(`/lessons/${info.id}/sections`, { params });
        console.log("Redux section by lesson id: ", data.data);
        return fulfillWithValue({ lessonId: info.id, sections: data.data });
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

const initialState: SectionsState = {
  sections: [],
  loading: false,
  error: null,
  section: null,
};

const sectionsSlice = createSlice({
  name: "sections",
  initialState,
  reducers: {
    sectionsReset: (state) => {
      state.sections = [];
      state.loading = true;
      state.error = null;
      state.section = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(get_section_by_section_id.pending, (state) => {
        state.loading = true;
      })
      .addCase(get_section_by_section_id.fulfilled, (state, action: PayloadAction<Section>) => {
        state.loading = false;
        state.section = action.payload;
      })
      .addCase(get_section_by_section_id.rejected, (state, action: PayloadAction<unknown>) => {
        state.loading = false;
        state.error = typeof action.payload === 'string' ? action.payload : "Unknown error";
      })
      .addCase(get_section_by_lesson_id.pending, (state) => {
        state.loading = true;
      })
      .addCase(get_section_by_lesson_id.fulfilled, (state, action: PayloadAction<{ lessonId: string | number; sections: Section[] }>) => {
        state.loading = false;
        state.sections = Array.isArray(action.payload.sections) ? action.payload.sections : [];
      })
      .addCase(get_section_by_lesson_id.rejected, (state, action: PayloadAction<unknown>) => {
        state.loading = false;
        state.error = typeof action.payload === 'string' ? action.payload : "Unknown error";
      })

  },
});

export const { sectionsReset } = sectionsSlice.actions;
export default sectionsSlice.reducer;
