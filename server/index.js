import express from 'express'
import bodyParser from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
// import {MONGODB} from '../server/config.js';
import postRoutes from './routes/posts.js';
import userRoutes from './routes/users.js';


import dotenv from 'dotenv';

const app = express();
dotenv.config();

// every route inside of the post routes will start with posts


app.use(bodyParser.json({limit: "30mb", extended:true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended:true}));
app.use(cors());


app.use('/posts', postRoutes);
app.use('/user', userRoutes);


app.get('/', (req, res) => {
    res.send('Hello to Memories API')
    });



const PORT = process.env.PORT || 5000;

// const test = 'test';

// in order to set up envitormental variables, need to make a .env file in the root directory of the project then assign it to a variable. also a package needs to be installed which is dotenv. 
// after installing the package, the server file needs to import a dotenv from  dotenv. then needs to be called in the server file. with dotenv.config();
mongoose.connect(process.env.CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=> app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error)=> console.log(error.message))

// mongoose.set('useFindAndModify', false);