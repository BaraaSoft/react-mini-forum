import { combineReducers } from 'redux';
import PostsReducers from './reducer_posts'
import { reducer as formReducer } from 'redux-form'
import postReducer from './reducer_showPost'

const rootReducer = combineReducers({
    posts: PostsReducers,
    form: formReducer,
    post: postReducer
});

export default rootReducer;