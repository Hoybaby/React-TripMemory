
import { FETCH_ALL, CREATE, DELETE,  UPDATE  } from '../constants/actionTypes';

export default (posts = [], action) => {
    // based

    // in reducers, the states always need to be equal to something.
    switch (action.type) {
        case FETCH_ALL:
            return action.payload;
            // this is the actual posts

        case CREATE :
            return [...posts, action.payload];

        case UPDATE:
            // if posts.ID === action.payload.ID then we want to return the action.payload because the action.payload is the newly updated post/memory
            return posts.map(post => post._id === action.payload._id ? action.payload : post);

        case 'LIKE':
            return posts.map(post => post._id === action.payload._id ? action.payload : post);

        case DELETE :
            // we are going to keep all the psots wwhere the id is not equal to the id we are deleting
            return posts.filter(post => post._id !== action.payload);
            break;
    
        default:
            return posts;
            
    }
}