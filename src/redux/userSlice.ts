import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type FilterInit = {
  search: string;
  priority: string[];
  status: string;
};

const initialFilter: FilterInit = {
  search: "",
  priority: [],
  status: "All",
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
    searchStatus: (state, action: PayloadAction<string>) => {
      state.status = action.payload;
    },
  },
});

export const { searchFilter, searchPriority, searchStatus } =
  filterSlice.actions;

export type todoInit = {
  id: string;
  name: string;
  priority: string;
  completed: boolean;
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
    toggleTodo: (state, action: PayloadAction<string>) => {
      let newTodoList = state.todoList.map((todo) => {
        return todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo;
      });

      state.todoList = newTodoList;
    },
  },
});

export const { addTodo, toggleTodo } = todoListSlice.actions;
