import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedTags: [],
  search: "",
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    tagSelected: (state, action) => {
      state.selectedTags.push(action.payload);
    },
    tagRemoved: (state, action) => {
      const remainingTags = state.selectedTags.filter(
        (tag) => tag !== action.payload
      );
      state.selectedTags = remainingTags;
    },
    searched: (state, action) => {
      state.search = action.payload;
    },
  },
});

export default filterSlice.reducer;
export const { tagSelected, tagRemoved, searched } = filterSlice.actions;
