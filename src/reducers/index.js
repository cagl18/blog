import { combineReducers } from 'redux';
import postsReducer from './postsReducer';
import { usersReducer } from './usersReducer';

export default combineReducers({
  posts: postsReducer, // tricking redux into thinking it has a valid reducer
  users: usersReducer
  // replaceMe: () => 10 // tricking redux into thinking it has a valid reducer
});
