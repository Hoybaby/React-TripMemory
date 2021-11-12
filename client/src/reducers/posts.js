export default (posts = [], action) => {
    // based

    // in reducers, the states always need to be equal to something.
    switch (action.type) {
        case 'FETCH_ALL':
            return action.payload;
            // this is the actual posts

        case 'CREATE' :
            return [...posts, action.payload];
            
    
        default:
            return posts;
            
    }
}