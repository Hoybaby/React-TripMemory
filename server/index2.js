import express from 'express'
import bodyParser from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
// import {MONGODB} from '../config';
const app = express();

app.use(bodyParser.json({limit: "30mb", extended:true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended:true}));
app.use(cors());

const db_password = process.env.DB_PASSWORD;

const db_username = process.env.DB_USERNAME;

const CONNECTION_URL = 'mongodb+srv://' + db_username + ':' + db_password + 'firstcluster.b4kva.mongodb.net/MemoryDB?retryWrites=true&w=majority'

const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=> app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error)=> console.log(error.message))

// mongoose.set('useFindAndModify', false);