import reducers, { initialState } from '../todo/todo.reducer';
import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers,
});

export const {
  initTodo,
  addTodoStart,
  addTodoSuccess,
  addTodoFailure,
  toggleTodoStart,
  toggleTodoSuccess,
  toggleTodoFailure,
  removeTodoStart,
  removeTodoSuccess,
  removeTodoFailure,
} = todoSlice.actions;

export default todoSlice.reducer;
