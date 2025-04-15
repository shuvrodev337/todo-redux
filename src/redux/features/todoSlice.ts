import { createSlice, PayloadAction } from "@reduxjs/toolkit";
type TTodo = {
  id: string;
  title: string;
  description: string;
  isCompleted?: boolean;
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
  reducers: {
    addTodo: (state, action: PayloadAction<TTodo>) => {
      state.todos.push({ ...action.payload, isCompleted: false }); // push won't mutate the  state.todos (currentstate er todos array) , IIMAR handles the non-mutation of non-primitive data behind the scene for reedux.
    },
    removeTodo: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.filter((item) => item.id !== action.payload);
    },
  },
});
export const { addTodo, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;
