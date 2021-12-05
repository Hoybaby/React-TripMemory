// adding all the routes
import express from 'express';

import {getPosts, createPost, updatePost, deletePost, likePost} from '../controllers/posts.js'
import auth from '../middleware/auth.js'

const router = express.Router();

router.get('/', getPosts);
// by implementing auth on line 11, it now saws that the user is logged in in order to create a post
router.post('/', auth, createPost);
router.patch('/:id', auth, updatePost);
router.delete('/:id', auth,  deletePost);
// why patch request? liking actually is actualling updating the post with the number of likes it has
router.patch('/:id/likePost', auth, likePost);


export default router;