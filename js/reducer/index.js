import {combineReducers} from 'redux';
import theme from './theme';
/** 
 * 合并reducers
 */
const index = combineReducers({
    theme: theme,
});
export default index;