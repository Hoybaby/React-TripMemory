import {AUTH, LOGOUT} from '../constants/actionTypes';

const authReducer = (state = {authData: null}, action) => {

    switch (action.type) {
        // if auth, we want to
        case AUTH:
            
                console.log(action?.data)
                return state;
                // ...state,
                // isAuthenticated: true,
                // user: action.user
        default:
            return state;
    }
}

export default authReducer;