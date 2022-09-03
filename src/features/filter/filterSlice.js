import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedTags: [],
  search: "",
  selectedAuthor: "",
  page: "1",
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
    addAuthor: (state, action) => {
      state.selectedAuthor = action.payload;
    },
    removeAuthor: (state) => {
      state.selectedAuthor = "";
    },
    pageChanged: (state, action) => {
      state.page = action.payload;
    },
    resetFilter: (state) => {
      state.selectedTags = [];
      state.search = "";
      state.selectedAuthor = "";
    },
  },
});

export default filterSlice.reducer;
export const {
  tagSelected,
  tagRemoved,
  searched,
  addAuthor,
  removeAuthor,
  pageChanged,
  resetFilter,
} = filterSlice.actions;
