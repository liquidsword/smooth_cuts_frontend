import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import currentUser from './reducers/currentUser.js';
import loginForm from './reducers/loginForm.js';
import signupForm from './reducers/signupForm.js';
import myPosts from './reducers/myPosts.js';
import newPostForm from './reducers/newPostForm.js';
import upVote from './reducers/upVote.js';
import thunk from 'redux-thunk';

const reducer = combineReducers({
  currentUser,
  loginForm,
  signupForm,
  myPosts,
  newPostForm,
  upVote
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)) )

export default store
