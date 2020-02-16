import Types from '../../action/types';
const defaultState = true;
export default function onAction(state = defaultState, action) {
  switch (action.type) {
    case Types.TABBAR_VISIBLR:
      return action.visible;
  }
  return state;
}
