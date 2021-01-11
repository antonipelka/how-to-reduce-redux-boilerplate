import { createStore } from 'redux';
import { Visibility } from './constants.js';
import { actions, reducer } from './slice.js';

const { subscribe, dispatch, getState } = createStore(reducer)

subscribe(() => {
  const { tasks, visibility } = getState()
  console.table(
    tasks.filter(({ isCompleted }) =>
      visibility === Visibility.All
      || isCompleted === (visibility === Visibility.Completed)
    )
  );
});

const dispatchWithLog = action => {
  console.log('Action:', action);
  dispatch(action);
};

const { add, remove, complete, setVisibility } = actions

dispatchWithLog(add('Dynamic task #1'))
dispatchWithLog(add('Dynamic task #2'))
dispatchWithLog(add('Dynamic task #3'))
dispatchWithLog(add('Dynamic task #4'))
dispatchWithLog(remove(1))
dispatchWithLog(complete(2))
dispatchWithLog(complete(3))
dispatchWithLog(setVisibility(Visibility.Pending))
