// var express = require('express');
import express from 'express';
// import bodyParser from 'body-parser';
// var app = express();

// var mongoose = require('mongoose');
import mongoose  from 'mongoose';
// var cors = require('cors');
import cors from 'cors'
// import MONGODB from './config.js'

// const {MONGODB} = require('./config.js')

const app = express();

app.use(express.urlencoded({limit: "30mb", extended: true}));
app.use(express.json({limit: "30mb", extended: true}));

app.use(cors());

const CONNECTION_URL = 'mongodb+srv://hoybaby:Welcome0@firstcluster.b4kva.mongodb.net/MemoryDB?retryWrites=true&w=majority'

const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => app.listen(PORT), () => console.log(`Server Running on port: ${PORT}`))
.catch((error)=> console.log(error.message));

// mongoose.set('useFindAndModify', false)
// body-parser is now with nexpress so the above should be enough.
// app.use(bodyParser.json({limit: "30mb", extended: true}))

// app.use(bodyParser.urlencoded({limit: "30mb", extended: true}))