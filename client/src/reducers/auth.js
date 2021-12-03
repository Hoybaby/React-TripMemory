import {AUTH, LOGOUT} from '../constants/actionTypes';

const authReducer = (state = {authData: null}, action) => {

    switch (action.type) {
        // if auth, we want to
        case AUTH:
            // we are setting the data to the local storage.
            localStorage.setItem('profile', JSON.stringify({...action?.data}));

            // we
            return {...state, authData: action?.data};
            
        default:
            return state;
    }
}

export default authReducer;