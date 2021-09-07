import { combineReducers } from "redux";

import posts from './posts'

export default combineReducers({
    // insider here we can call all the indivudual reducers
    posts,
})