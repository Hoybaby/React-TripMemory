import React from 'react';
import { Container } from '@material-ui/core';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
// import { Routes, Route } from 'react-router-dom';
// import { Route, Switch } from "react-router";

import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Auth from './components/Auth/Auth';

const App = () => {
  return(
  <Router>
    <Container maxWidth="lg">
      <Navbar />
      <Routes>
        <Route path="/"  element={<Home/>} />
        <Route path="/auth" element={<Auth/>} />
      </Routes>
      
    </Container>
  </Router>
  );
}
  


export default App;