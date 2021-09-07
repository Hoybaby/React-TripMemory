export default (posts = [], action) => {
    // based

    // in reducers, the states always need to be equal to something.
    switch (action.type) {
        case 'FETCH_ALL':
            return posts;

        case 'CREATE' :
            return posts;
            break;
    
        default:
            return posts;
            break;
    }
}