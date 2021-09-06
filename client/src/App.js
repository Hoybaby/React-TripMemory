
import './App.css';
import {Container, AppBar, Typography, Grow, Grid} from '@material-ui/core';

function App() {
  return (
    <Container maxWidth="lg">
      <AppBar position="static" color="inherit">
        <Typography variant="h2" align="center">
          Memories
          <img src={memories} alt="memories" height="60"/>
        </Typography>
      </AppBar>

    </Container>

  );
}

export default App;
