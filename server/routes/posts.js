// adding all the routes
import express from 'express';

import {getPosts, createPost, updatePost, deletePost, likePost} from '../controllers/posts.js'

const router = express.Router();

router.get('/', getPosts);
router.post('/', createPost);
router.patch('/:id', updatePost);
router.delete('/:id', deletePost);
// why patch request? liking actually is actualling updating the post with the number of likes it has
router.patch('/:id/likePost', likePost);


export default router;