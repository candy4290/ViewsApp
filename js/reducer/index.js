import {combineReducers} from 'redux';
import theme from './theme';
import tarbarVisible from './tarbar';
import isLogged from './login';
/**
 * 合并reducers
 */
const index = combineReducers({
  theme: theme,
  visible: tarbarVisible,
  isLogged: isLogged,
});
export default index;
