import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux";
import profileReducer from './profile-reducer';
import messagesReducer from './messages-reducer';
import friendsReducer from "./friends-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleWare from "redux-thunk";

let reducers = combineReducers({
  profilePage: profileReducer,
  messagesPage: messagesReducer,
  friendsPage: friendsReducer,
  auth: authReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleWare));

window.store = store;

export default store;