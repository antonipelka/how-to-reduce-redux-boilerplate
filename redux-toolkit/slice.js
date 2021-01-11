import { createSlice } from '@reduxjs/toolkit'
import { Visibility } from './constants.js'

export const { actions, reducer } = createSlice({
  name: 'todoList',
  
  initialState: {
    visibility: Visibility.All,
    tasks: [{
      name: 'Reduce Redux Boilerplate',
      isCompleted: false,
    }],
  },
  
  reducers: {
    add: (state, { payload: name }) => {
      state.tasks.push({
        name,
        isCompleted: false,
      });
    },
    remove: (state, { payload: byIndex }) => {
      state.tasks.splice(byIndex, 1);
    },
    complete: (state, { payload: byIndex }) => {
      state.tasks[byIndex].isCompleted = true;
    },
    setVisibility: (state, { payload: value }) => {
      state.visibility = value;
    },
  },
  
  extraReducers: {
    'external/action': state => {
      state.tasks = [];
    },
  },
});
