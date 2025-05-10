import api from '@/utilities/api';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { isAxiosError } from 'axios';
import { Material, MaterialsState } from '@/store/interface/materials';

export const get_material_by_lesson_id = createAsyncThunk(
  'materials/get_material_by_lesson_id',
  async (
    info: { id: number | string } = { id: 0 },
    { rejectWithValue, fulfillWithValue }
  ) => {
    try {
      const params = { id: info.id };
      const { data } = await api.get(`/lessons/${info.id}/materials`, { params });
      console.log("Redux material by lesson id: ",data.data);
      return fulfillWithValue({ lessonId: info.id, materials: data.data });
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

const initialState: MaterialsState = {
  materialsByLessonId: {},
  loading: false,
  error: null,
  material: null,
};

const materialsSlice = createSlice({
  name: 'materials',
  initialState,
  reducers: {
    materialsReset: (state) => {
      state.materialsByLessonId = {};
      state.loading = true;
      state.error = null;
      state.material = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(get_material_by_lesson_id.pending, (state) => {
        state.loading = true;
      })
      .addCase(get_material_by_lesson_id.fulfilled, (state, action: PayloadAction<{ lessonId: string | number, materials: Material[] }>) => {
        state.loading = false;
        const { lessonId, materials } = action.payload;
        state.materialsByLessonId = {
          ...state.materialsByLessonId,
          [lessonId]: materials
        };
      })
      .addCase(get_material_by_lesson_id.rejected, (state, action: PayloadAction<unknown>) => {
        state.loading = false;
        state.error = typeof action.payload === 'string' ? action.payload : "Unknown error";
      })
  },
});

export const { materialsReset } = materialsSlice.actions;
export default materialsSlice.reducer;
