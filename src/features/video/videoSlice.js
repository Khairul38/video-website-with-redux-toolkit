import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getVideo, patchVideo } from "./videoAPI";

const initialState = {
  video: {},
  isLoading: false,
  isError: false,
  error: "",
};

export const fetchVideoAsync = createAsyncThunk(
  "video/fetchVideo",
  async (id) => {
    const video = await getVideo(id);
    return video;
  }
);
export const patchVideoAsync = createAsyncThunk(
  "video/patchVideo",
  async ({ id, value, condition }) => {
    const video = await patchVideo(id, value, condition);
    return video;
  }
);

const videoSlice = createSlice({
  name: "video",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchVideoAsync.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(fetchVideoAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.video = action.payload;
      })
      .addCase(fetchVideoAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.video = {};
        state.isError = true;
        state.error = action.error?.message;
      });
    // Like unlike builder
    builder.addCase(patchVideoAsync.fulfilled, (state, action) => {
      state.isLoading = false;
      state.video.likes = action.payload.likes;
      state.video.unlikes = action.payload.unlikes;
    });
  },
});

export default videoSlice.reducer;
