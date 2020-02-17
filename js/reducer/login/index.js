import Types from '../../action/types';
const defaultState = false;
export default function onAction(state = defaultState, action) {
  switch (action.type) {
    case Types.LOGGED_CHANGE:
      return action.isLogged;
  }
  return state;
}
