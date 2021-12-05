import { AUTH } from '../constants/actionTypes';
import * as api from '../api';

// action creator that will return an action
//if actions are async, we need to to use redux thunk meaning we have a function that returns an async function with a dispatch
export const signin =(formData, navigate) => async (dispatch) => { 

    try {
        // log in user

        navigate('/');
    } catch(error) {
        console.log(error)
    }
}

export const signup =(formData, navigate) => async (dispatch) => { 

    try {
        // sign in user

        navigate('/');
    } catch (error) {
        console.log(error)
    }
}