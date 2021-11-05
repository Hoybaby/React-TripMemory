import express from 'express'
import bodyParser from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
// import {MONGODB} from '../server/config.js';
import postRoutes from './routes/posts.js'

const app = express();

// every route inside of the post routes will start with posts


app.use(bodyParser.json({limit: "30mb", extended:true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended:true}));
app.use(cors());


app.use('/posts', postRoutes)

const CONNECTION_URL = 'mongodb+srv://hoybaby:Welcome0@firstcluster.b4kva.mongodb.net/MemoryDB?retryWrites=true&w=majority'

const PORT = process.env.PORT || 5000;

const test = 'test';

mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=> app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error)=> console.log(error.message))

// mongoose.set('useFindAndModify', false);