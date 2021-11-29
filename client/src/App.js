
// import './App.css';
import React, {useState, useEffect} from 'react';
import {Container, AppBar, Typography, Grow, Grid} from '@material-ui/core';
import { useDispatch } from 'react-redux';

import {getPosts} from './actions/posts'
import Posts from './components/Posts/Posts'
import Form from './components/Form/Form'

import memories from './images/memories.png'
import useStyles from './styles';
import './index.css';



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
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading }variant="h2" align="center">
          Memories
          <img className={classes.image} src={memories} alt="memories" height="60"/>
        </Typography>
      </AppBar>
        <Grow in>
          <Container>
            <Grid className={classes.mainContainer} container justifyContent="space-between" alignItems="stretch" spacing={3}>
              {/* the xs means for small devices it will take it all up */}
              <Grid item xs={12} sm={7}>
                <Posts setCurrentId={setCurrentId}/>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Form currentId={currentId} setCurrentId={setCurrentId} />
              </Grid>
            </Grid>
          </Container>
        </Grow>
      

    </Container>

  );
}

export default App;
