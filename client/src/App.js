
// import './App.css';
import React from 'react';
import {Container} from '@material-ui/core';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// import memories from './images/memories.png'

import './index.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';



const App = () => {

  return (
    <BrowserRouter>

      <Container maxWidth="lg">
        <Navbar />
        {/* the switch contains the routes */}
        <Switch> 
          <Route exact path="/" component={Home} />
          <Route path="/auth" component={Auth} />
        </Switch>
        <Home/>
      </Container>
    </BrowserRouter>

  );
}

export default App;
