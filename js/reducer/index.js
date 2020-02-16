import {combineReducers} from 'redux';
import theme from './theme';
import tarbarVisible from './tarbar';
/**
 * 合并reducers
 */
const index = combineReducers({
  theme: theme,
  visible: tarbarVisible,
});
export default index;
