import Types from '../types';

export function onLoggedChange(isLogged) {
  return {type: Types.LOGGED_CHANGE, isLogged: isLogged};
}
