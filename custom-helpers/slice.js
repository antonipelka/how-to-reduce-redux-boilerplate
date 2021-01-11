import { createActions, createReducer } from './helpers.js'
import { Visibility } from './constants.js'

const name = 'todoList';

const initialState = {
  visibility: Visibility.All,
  tasks: [{
    name: 'Reduce Redux Boilerplate',
    isCompleted: false,
  }],
};

const reducerConfig = {
  add: (state, name) => ({
    ...state,
    tasks: [
      ...state.tasks,
      {
        name,
        isCompleted: false,
      },
    ],
  }),
  remove: (state, byIndex) => ({
    ...state,
    tasks: state.tasks.filter((_, index) => index !== byIndex),
  }),
  complete: (state, byIndex) => ({
    ...state,
    tasks: state.tasks.map(
      (task, index) => index === byIndex
        ? { ...task, isCompleted: true }
        : task,
    )
  }),
  setVisibility: (state, value) => ({
    ...state,
    visibility: value,
  }),
};

export const reducer = createReducer(name, reducerConfig, initialState);
export const actions = createActions(name, reducerConfig);
