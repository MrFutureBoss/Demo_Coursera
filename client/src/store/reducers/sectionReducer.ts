import api from '@/utilities/api';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { isAxiosError } from 'axios';
import { Section, SectionsState } from '@/store/interface/sections';

export const get_section_by_lesson_id = createAsyncThunk(
  'sections/get_section_by_lesson_id',
  async (
    info: { id: number | string } = { id: 0 },
    { rejectWithValue, fulfillWithValue }
  ) => {
    try {
      const params = { id: info.id };
      const { data } = await api.get(`/lessons/${info.id}/sections`, { params });
      console.log("Redux section by lesson id: ",data.data);
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

const initialState: SectionsState = {
  sections: [],
  loading: false,
  error: null,
  section: null,
};

const sectionsSlice = createSlice({
  name: 'sections',
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
      .addCase(get_section_by_lesson_id.pending, (state) => {
        state.loading = true;
      })
      .addCase(get_section_by_lesson_id.fulfilled, (state, action: PayloadAction<Section[]>) => {
        state.loading = false;
        state.sections = Array.isArray(action.payload) ? action.payload : [];
      })
      .addCase(get_section_by_lesson_id.rejected, (state, action: PayloadAction<unknown>) => {
        state.loading = false;
        state.error = typeof action.payload === 'string' ? action.payload : "Unknown error";
      })
  },
});

export const { sectionsReset } = sectionsSlice.actions;
export default sectionsSlice.reducer;
