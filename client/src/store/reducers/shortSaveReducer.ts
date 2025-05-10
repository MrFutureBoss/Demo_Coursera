import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    sectionId: null,
    testId: null
};

const shortSaveSlice = createSlice({
    name: 'shortSave',
    initialState,
    reducers: {
        shortSaveReset: (state) => {
            state.sectionId = null;
            state.testId = null;
        },
    },
});

export const { shortSaveReset } = shortSaveSlice.actions;
export default shortSaveSlice.reducer;
