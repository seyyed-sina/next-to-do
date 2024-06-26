import { IToDo } from '@/src/components/todo/todo.types';
import { updateObj } from '@helpers';
import { PayloadAction } from '@reduxjs/toolkit';
import { toggleTodoSuccess } from './todo.slice';

interface TodoState {
  list: IToDo[];
  addLoading: boolean;
  toggleLoading: Record<string, boolean>;
  removeLoading: Record<string, boolean>;
}

export const initialState: TodoState = {
  list: [],
  addLoading: false,
  toggleLoading: {},
  removeLoading: {},
};

const reducer = {
  initTodo: (state: TodoState) => {
    state.list = [
      {
        id: '1',
        title: 'Todo 1',
        completed: true,
      },
      {
        id: '2',
        title: 'Todo 2',
        completed: false,
      },
    ];
  },
  addTodoStart: (state: TodoState) => {
    state.addLoading = true;
  },
  addTodoSuccess: (state: TodoState, action: PayloadAction<string>) => {
    const newTodo: IToDo = {
      id: new Date().toISOString(),
      title: action.payload,
      completed: false,
    };
    state.list.push(newTodo);
    state.addLoading = false;
  },
  addTodoFailure: (state: TodoState) => {
    state.addLoading = false;
  },
  toggleTodoStart: (state: TodoState, action: PayloadAction<string>) => {
    state.toggleLoading[action.payload] = true;
  },
  toggleTodoSuccess: (state: TodoState, action: PayloadAction<string>) => {
    const todo = state.list.find((todo) => todo.id === action.payload);
    if (todo) {
      todo.completed = !todo.completed;
    }
    delete state.toggleLoading[action.payload];
  },
  toggleTodoFailure: (state: TodoState, action: PayloadAction<string>) => {
    delete state.toggleLoading[action.payload];
  },
  removeTodoStart: (state: TodoState, action: PayloadAction<string>) => {
    state.removeLoading[action.payload] = true;
  },
  removeTodoSuccess: (state: TodoState, action: PayloadAction<string>) => {
    state.list = state.list.filter((todo) => todo.id !== action.payload);
    delete state.removeLoading[action.payload];
  },
  removeTodoFailure: (state: TodoState, action: PayloadAction<string>) => {
    delete state.removeLoading[action.payload];
  },
};

export default reducer;
