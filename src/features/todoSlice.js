import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "counter",
  initialState: [],
  reducers: {
    addProduct: (state, { payload }) => {
      state.push(payload);
    },
  },
});

export const { addProduct } = todoSlice.actions;

export default todoSlice.reducer;
