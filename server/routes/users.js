import express from 'express';

const router = express.Router();

import {signin, signup} from '../controllers/user.js';



// why is this a postroute? it is because you ahve to send some data to the back end, you have to send the details from the form to the backend

router.post('/signin', signin);
router.post('/signup', signup);


export default router;