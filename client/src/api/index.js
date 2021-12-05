import axios from 'axios';

const API = axios.create({baseURL: 'http://localhost:3000/'})

// later change this back to https://memory-react-card.herokuapp.com/posts
// const url = 'http://localhost:3000/posts';

export const fetchPosts = () => API.get('/posts');

// take in one parameter which will be the entire post and then the axios.post will be called and send.
export const createPost = (newPost) => API.post('/posts', newPost);

export const likePost = (id) => API.patch(`/posts/${id}/likePost`);

// we have the url and the id for the post we want to update. then we are going to send the updated post.
export const updatePost = (id, updatedPost) => API.patch(`'/posts}/${id}`, updatedPost);

export const deletePost = (id) => API.delete(`/posts/${id}`);

export const signin =(formData) => API.post('/users/signin', formData);

export const signup =(formData) => API.post('/users/signup', formData);