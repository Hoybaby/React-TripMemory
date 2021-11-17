export default (posts = [], action) => {
    // based

    // in reducers, the states always need to be equal to something.
    switch (action.type) {
        case 'FETCH_ALL':
            return action.payload;
            // this is the actual posts

        case 'CREATE' :
            return [...posts, action.payload];

        case 'UPDATE':
            // if posts.ID === action.payload.ID then we want to return the action.payload because the action.payload is the newly updated post/memory
            return posts.map(post => post,_id === action.payload._id ? action.payload : post);

        case 'DELETE' :
            
    
        default:
            return posts;
            
    }
}