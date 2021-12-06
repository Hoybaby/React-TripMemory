import express from 'express';

import {signin, signup} from '../controllers/user.js';

const router = express.Router();

// why is this a postroute? it is because you ahve to send some data to the back end, you have to send the details from the form to the backend

router.post('/signin', signin);
router.post('/signup', signup);


export default router;