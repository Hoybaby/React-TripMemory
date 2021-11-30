import React from 'react'
import {Link} from 'react-router-dom';
import { AppBar, Typography } from '@material-ui/core';

import useStyles from './styles';
import memories from '../../images/memories.png';

const Navbar = () => {

    const classes = useStyles();

    return (
        <AppBar className={classes.appBar} position="static" color="inherit">
            <div className="classes brandContainer">
                {/* I am making the words link back to the home page */}
                <Typography component={Link} to='/' className={classes.heading }variant="h2" align="center">
                Memories
                <img className={classes.image} src={memories} alt="memories" height="60"/>
            </Typography>
            </div>
            
        </AppBar>
    )
}

export default Navbar;
