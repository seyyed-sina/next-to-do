import { AppDispatch } from '..';
import {
  addTodoFailure,
  addTodoStart,
  addTodoSuccess,
  removeTodoFailure,
  removeTodoStart,
  removeTodoSuccess,
  toggleTodoFailure,
  toggleTodoStart,
  toggleTodoSuccess,
} from './todo.slice';

const timeout = 1500;

export const addTodoAsync = (text: string) => (dispatch: AppDispatch) => {
  dispatch(addTodoStart());
  setTimeout(() => {
    try {
      dispatch(addTodoSuccess(text));
    } catch (error) {
      dispatch(addTodoFailure());
    }
  }, timeout);
};

export const toggleTodoAsync = (id: string) => (dispatch: AppDispatch) => {
  dispatch(toggleTodoStart(id));
  setTimeout(() => {
    try {
      dispatch(toggleTodoSuccess(id));
    } catch (error) {
      dispatch(toggleTodoFailure(id));
    }
  }, timeout);
};

export const removeTodoAsync = (id: string) => (dispatch: AppDispatch) => {
  dispatch(removeTodoStart(id));
  setTimeout(() => {
    try {
      dispatch(removeTodoSuccess(id));
    } catch (error) {
      dispatch(removeTodoFailure(id));
    }
  }, timeout);
};
