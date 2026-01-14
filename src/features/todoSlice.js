import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "counter",
  initialState: localStorage.getItem("redux-todos")
    ? JSON.parse(localStorage.getItem("redux-todos"))
    : [],
  reducers: {
    addProduct: (state, { payload }) => {
      state.push(payload);
      localStorage.setItem("redux-todos", JSON.stringify(state));
    },
  },
});

export const { addProduct } = todoSlice.actions;

export default todoSlice.reducer;
