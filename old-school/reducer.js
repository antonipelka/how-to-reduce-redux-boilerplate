import {
  ADD,
  REMOVE,
  COMPLETE,
  SET_VISIBILITY,
  Visibility,
} from './constants.js';

const initialState = {
  visibility: Visibility.All,
  tasks: [{
    name: 'Reduce Redux Boilerplate',
    isCompleted: false,
  }],
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        tasks: [
          ...state.tasks,
          {
            name: action.payload,
            isCompleted: false,
          },
        ],
      };
    case REMOVE:
      return {
        ...state,
        tasks: state.tasks.filter(
          (_, index) => index !== action.payload,
        ),
      };
    case COMPLETE:
      return {
        ...state,
        tasks: state.tasks.map(
          (task, index) => index === action.payload
            ? { ...task, isCompleted: true }
            : task,
        )
      }
    case SET_VISIBILITY:
      return {
        ...state,
        visibility: action.payload,
      };
    default:
      return state;
  }
}