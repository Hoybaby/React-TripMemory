import * as api from '../api/index.js';
// we import everything as api

// do it this way because we going to use alot of calls
// api.fetchPosts

export const getPosts =() => async(dispatch) => {
    try {
        const {data} = await api.fetchPosts();

        dispatch({type: 'FETCH_ALL' , payload: data})
        // now we are succfesul using redux to dispatch action
    } catch(error) {
        console.log(error.message);
    }
    // this is async so we need to use redux thunk
    
    // payload is the data which where we are storing all the posts
    
}