import { createSlice } from "@reduxjs/toolkit";

const jobPostSlice = createSlice({
  name: "jobpost-slice",
  initialState: {
    post: null,
  },
  reducers: {
    setData: (state, action) => {
      state.post = action.payload;
    },
  },
});

export const { setData } = jobPostSlice.actions;
export default jobPostSlice;
