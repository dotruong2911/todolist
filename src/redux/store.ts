import { configureStore } from "@reduxjs/toolkit";
import { filterSlice, todoListSlice } from "./userSlice";

export const store = configureStore({
  reducer: {
    filter: filterSlice.reducer,
    todoList: todoListSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
