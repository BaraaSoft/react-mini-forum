import { combineReducers } from 'redux';
import reducerMain from './reducer_main'
const rootReducer = combineReducers({
    main: reducerMain
});

export default rootReducer;