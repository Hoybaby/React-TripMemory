import { AUTH } from '../constants/actionTypes';
import * as api from '../api';
// import {useNavigate} from 'react-router-dom';



// action creator that will return an action
//if actions are async, we need to to use redux thunk meaning we have a function that returns an async function with a dispatch
export const signin =(formData, navigate) => async (dispatch) => { 

    // const navigate = useNavigate();
    try {
        // log in user
        // 
        const {data} = await api.signIn(formData);

        dispatch({ type: AUTH, data});

        navigate('/');
    } catch(error) {
        console.log(error)
    }
}

export const signup =(formData, navigate) => async (dispatch) => { 
    // const navigate = useNavigate();

    try {
        // sign in user

        // 
        const {data} = await api.signUp(formData);

        dispatch({ type: AUTH, data});

        navigate('/');
    } catch (error) {
        console.log(error,' something is wrong')
    }
}