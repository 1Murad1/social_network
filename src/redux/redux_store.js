import {combineReducers, createStore} from "redux";
import profileReducer from "../reducers/profileReducer"
import dialogsReducer from "../reducers/dialogsReducer";
import usersReducer from "../reducers/usersReducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer
});

let store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
 window.store = store
export default store;



