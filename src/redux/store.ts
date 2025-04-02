import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./features/todoSlice";
import logger from "redux-logger";
export const store = configureStore({
  reducer: {
    todos: todoReducer,
  },

  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

/* steps: 
1. create store + configureStore 
2. connect store app to main.tsx
3. create slice for corresponding feature
4. In store reducer,  declare state with related reducer(from coresponding slice)
*/
