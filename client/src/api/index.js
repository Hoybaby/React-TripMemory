import axios from 'axios';

const url = 'http://localhost:5000/posts';

export const fetchPosts = () => axios.get(url);

// take in one parameter which will be the entire post and then the axios.post will be called and send.
export const createPost = (newPost) => axios.post(url, newPost);

// we have the url and the id for the post we want to update. then we are going to send the updated post.
export const updatePost = (id, updatedPost) => axios.patch(`${url}/${id}`, updatedPost);

export const deletePost = (id) => axios.delete(`${url}/${id}`);