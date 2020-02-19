import Types from '../../action/types';

const defaultState = {
  dark: false,
  colors: {
    primary: '#55ADFF',
    background: 'rgb(242, 242, 242)',
    card: 'rgb(255, 255, 255)',
    text: 'rgb(28, 28, 30)',
    border: 'rgb(199, 199, 204)',
  },
};
export default function onAction(state = defaultState, action) {
  switch (action.type) {
    case Types.THEME_CHANGE:
      const theme = {...state};
      theme.colors.primary = action.theme;
      return {
        ...theme,
      };
  }
  return state;
}
