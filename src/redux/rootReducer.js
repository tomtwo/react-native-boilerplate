import { combineReducers } from 'redux';

import accounts from './modules/accounts';

const appReducer = combineReducers({
  accounts
});

export default function rootReducer(state, action) {
  let newState = state;

  // clear all redux on logout
  if (action && action.type === 'CLEAR_STORE') {
    newState = undefined;
  }

  return appReducer(newState, action);
}
