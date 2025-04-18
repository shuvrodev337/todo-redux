import { createSlice, PayloadAction } from "@reduxjs/toolkit";
type TTodo = {
  id: string;
  title: string;
  description: string;
  isCompleted?: boolean;
  priority: string;
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
    toggleComplete: (state, action: PayloadAction<string>) => {
      const task = state.todos.find((item) => item.id === action.payload);
      // toggling isCompletede value
      task!.isCompleted = !task?.isCompleted;
      //sorting
      state.todos = state.todos.sort((a, b) => {
        return Number(a.isCompleted) - Number(b.isCompleted);
        /*true becomes 1
        false or undefined becomes 0 when converted with Number()
        So uncompleted (or undefined) todos will come first, and completed ones will be sorted to the bottom.
        */
      });
    },
  },
});
export const { addTodo, removeTodo, toggleComplete } = todoSlice.actions;
export default todoSlice.reducer;
