import axios from 'axios';

const url = 'http://localhost:5000/posts';

export const fetchPosts = () => axios.get(url);

// take in one parameter which will be the entire post and then the axios.post will be called and send.
export const createPost = (newPost) => axios.post(url, newPost);