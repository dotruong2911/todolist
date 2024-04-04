import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "./store";

export const searchSelector = (state: RootState) => state.filter.search;
export const prioritySelector = (state: RootState) => state.filter.priority;
export const todoSelector = (state: RootState) => state.todoList.todoList;

export const todoSelector1 = createSelector(
  searchSelector,
  prioritySelector,
  todoSelector,
  (searchText, priorities, todoLists) => {
    return todoLists.filter((todo) => {
      if (priorities.length) {
        return (
          todo.name.includes(searchText) && priorities.includes(todo.priority)
        );
      } else {
        return todo.name.includes(searchText);
      }
    });
  }
);
