import { combineReducers } from "redux";

import posts from './posts'
import auth from './auth'

export default combineReducers({
    // insider here we can call all the indivudual reducers
    posts,
    auth
})