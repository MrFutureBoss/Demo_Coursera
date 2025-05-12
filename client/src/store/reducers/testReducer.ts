import api from "@/utilities/api";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { isAxiosError } from "axios";
import { Test, TestsState } from "@/store/interface/tests";

export const get_test_by_course_quiz_id = createAsyncThunk(
    'tests/get_test_by_course_quiz_id',
    async (
        info: { id: number | string } = { id: 0 },
        { rejectWithValue, fulfillWithValue }
    ) => {
        try {
            const params = { id: info.id };
            const { data } = await api.get(`/tests/${info.id}`, { params });
            // console.log("Redux test quizby course quiz id: ",data.data);
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

export const get_test_infor_by_course_quiz_id = createAsyncThunk(
    'tests/get_test_infor_by_course_quiz_id',
    async (
        info: { id: number | string } = { id: 0 },
        { rejectWithValue, fulfillWithValue }
    ) => {
        try {
            const params = { id: info.id };
            const { data } = await api.get(`/tests/${info.id}/infor`, { params });
            console.log("Redux test infor by course quiz id: ",data.data);
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

export const get_test_result_by_props = createAsyncThunk(
    'tests/get_test_result_by_props',
    async (
        info: { id: number | string } = { id: 0 },
        { rejectWithValue, fulfillWithValue }
    ) => {
        try {
            return fulfillWithValue({});
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


const initialState: TestsState = {
    tests: [],
    loading: false,
    error: null,
    test: null,
    test_result: null,
    count: 0,
};

const testsSlice = createSlice({
    name: 'tests',
    initialState,
    reducers: {
        testsReset: (state) => {
            state.tests = [];
            state.loading = true;
            state.error = null;
            state.test = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(get_test_by_course_quiz_id.pending, (state) => {
                state.loading = true;
            })
            .addCase(get_test_by_course_quiz_id.fulfilled, (state, action: PayloadAction<Test[]>) => {
                state.loading = false;
                state.tests = action.payload;
                state.count = action.payload.length;
            })
            .addCase(get_test_by_course_quiz_id.rejected, (state, action: PayloadAction<unknown>) => {
                state.loading = false;
                state.error = typeof action.payload === 'string' ? action.payload : "Unknown error";
            })
            .addCase(get_test_infor_by_course_quiz_id.pending, (state) => {
                state.loading = true;
            })
            .addCase(get_test_infor_by_course_quiz_id.fulfilled, (state, action: PayloadAction<Test>) => {
                state.loading = false;
                state.test = action.payload;
            })
            .addCase(get_test_infor_by_course_quiz_id.rejected, (state, action: PayloadAction<unknown>) => {
                state.loading = false;
                state.error = typeof action.payload === 'string' ? action.payload : "Unknown error";
            })
            .addCase(get_test_result_by_props.pending, (state) => {
                state.loading = true;
            })
            .addCase(get_test_result_by_props.fulfilled, (state, action: PayloadAction<Test>) => {
                state.loading = false;
                state.test_result = action.payload;
            })
            .addCase(get_test_result_by_props.rejected, (state, action: PayloadAction<unknown>) => {
                state.loading = false;
                state.error = typeof action.payload === 'string' ? action.payload : "Unknown error";
            })
    },
});

export const { testsReset } = testsSlice.actions;
export default testsSlice.reducer;
