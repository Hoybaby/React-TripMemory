import * as api from '../api';
// we import everything as api

// do it this way because we going to use alot of calls
// api.fetchPosts

const getPosts =() => {
    // this is async so we need to use redux thunk
    const action = {type: 'FETCH_ALL', payload: []}
    // payload is the data which where we are storing all the posts
    return action;
}