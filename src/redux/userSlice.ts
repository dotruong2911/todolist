import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type FilterInit = {
  search: string;
  priority: string[];
};

const initialFilter: FilterInit = {
  search: "",
  priority: [],
};

export const filterSlice = createSlice({
  name: "filter",
  initialState: initialFilter,
  reducers: {
    searchFilter: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
    searchPriority: (state, action: PayloadAction<string[]>) => {
      state.priority = action.payload;
    },
  },
});

export const { searchFilter, searchPriority } = filterSlice.actions;

export type todoInit = {
  id: string;
  name: string;
  priority: string;
};

export type TodoListInit = {
  todoList: todoInit[];
};

const initialTodoList: TodoListInit = {
  todoList: [],
};
export const todoListSlice = createSlice({
  name: "todoList",
  initialState: initialTodoList,
  reducers: {
    addTodo: (state, action: PayloadAction<todoInit>) => {
      state.todoList.push(action.payload);
    },
  },
});

export const { addTodo } = todoListSlice.actions;
