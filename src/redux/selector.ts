import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "./store";

export const searchSelector = (state: RootState) => state.filter.search;
export const prioritySelector = (state: RootState) => state.filter.priority;
export const todoSelector = (state: RootState) => state.todoList.todoList;
export const statusSelector = (state: RootState) => state.filter.status;

export const todoSelector1 = createSelector(
  searchSelector,
  prioritySelector,
  statusSelector,
  todoSelector,
  (searchText, priorities, status, todoLists) => {
    return todoLists.filter((todo) => {
      if (status === "All") {
        if (priorities.length) {
          return (
            todo.name.includes(searchText) && priorities.includes(todo.priority)
          );
        } else {
          return todo.name.includes(searchText);
        }
      }

      if (status === "Completed") {
        if (priorities.length) {
          return (
            todo.name.includes(searchText) &&
            priorities.includes(todo.priority) &&
            todo.completed
          );
        } else {
          return todo.name.includes(searchText) && todo.completed;
        }
      }

      if (status === "Todo") {
        if (priorities.length) {
          return (
            todo.name.includes(searchText) &&
            priorities.includes(todo.priority) &&
            !todo.completed
          );
        } else {
          return todo.name.includes(searchText) && !todo.completed;
        }
      }
    });
  }
);
