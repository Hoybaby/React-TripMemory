import * as api from '../api';
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

export const createPost =(post) => async(dispatch) => {
    try {
        // we are going to send the post to the server;
        const {data} = await api.createPost(post);

        // this action will create a new post and we are going to dispatch it to the reducer.
        dispatch({type: 'CREATE', payload: data})
    } catch(error) {
        console.log(error.message);
    }
}

export const updatePost =(id, post) => async(dispatch) => {
    try {
        // first need to create the request. important to pass in the id so it knows which one to grab
        const {data} = await api.updatePost(id, post);

        dispatch({type: 'UPDATE', payload: data})
    } catch(error) {
        console.log(error.message);
    }
}
