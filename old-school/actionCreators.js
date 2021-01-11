import {
  ADD,
  REMOVE,
  COMPLETE,
  SET_VISIBILITY,
} from './constants.js';

export const add = name => ({
  type: ADD,
  payload: name,
});

export const remove = byIndex => ({
  type: REMOVE,
  payload: byIndex,
});

export const complete = byIndex => ({
  type: COMPLETE,
  payload: byIndex,
});

export const setVisibility = state => ({
  type: SET_VISIBILITY,
  payload: state,
});
