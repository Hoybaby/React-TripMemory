
// import './App.css';
import React, {useState, useEffect} from 'react';
import {Container, AppBar, Typography, Grow, Grid} from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import {getPosts} from './actions/posts'
import Posts from './components/Posts/Posts'
import Form from './components/Form/Form'

// import memories from './images/memories.png'
import useStyles from './styles';
import './index.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';



const App = () => {

  const [currentId, setCurrentId] = useState(null)

  const classes= useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());

    // the reason i am adding currentId is because since now we are clearing the input, we are changing the currentId which then will change the backend post.
  }, [currentId, dispatch])

  return (
    <Container maxWidth="lg">
      <Navbar />
      <Home/>
      

    </Container>

  );
}

export default App;
