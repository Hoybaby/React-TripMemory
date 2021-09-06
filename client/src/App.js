
// import './App.css';
import {Container, AppBar, Typography, Grow, Grid} from '@material-ui/core';

import Posts from './components/Posts/Posts'
import Form from './components/Form/Form'
import memories from './images/memories.png'


function App() {
  return (
    <Container maxWidth="lg">
      <AppBar position="static" color="inherit">
        <Typography variant="h2" align="center">
          Memories
          <img src={memories} alt="memories" height="60"/>
        </Typography>
        <Grow in>
          <Container>
            <Grid container justify="space-between" alighnItems="stretch" spacing={3}>
              {/* the xs means for small devices it will take it all up */}
              <Grid item xs={12} sm={7}>
                <Posts/>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Form/>
              </Grid>
            </Grid>
          </Container>
        </Grow>
      </AppBar>

    </Container>

  );
}

export default App;
