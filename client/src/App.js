import React from 'react';
import { Container } from '@material-ui/core';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
// import { Routes, Route } from 'react-router-dom';
// import { Route, Switch } from "react-router";

import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Auth from './components/Auth/Auth';

const App = () => (
  <Router>
    <Container maxWidth="lg">
      <Navbar />
      <Routes>
        <Route path="/" exact elemtn={<Home/>} />
        <Route path="/auth" exact component={<Auth/>} />
      </Routes>
      <Home/>
    </Container>
  </Router>
);

export default App;