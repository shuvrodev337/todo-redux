import { createSlice } from "@reduxjs/toolkit";
type TTodo = {
  name: string;
};
type TTodosStateType = {
  todos: TTodo[];
};

const initialState: TTodosStateType = {
  todos: [],
};
export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {},
});

export default todoSlice.reducer;
