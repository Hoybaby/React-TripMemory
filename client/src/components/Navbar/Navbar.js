import React from 'react'
import {Link} from 'react-router-dom';
import { AppBar, Avatar, Toolbar, Typography } from '@material-ui/core';

import useStyles from './styles';
import memories from '../../images/memories.png';

const Navbar = () => {

    const classes = useStyles();
    const user = null;

    return (
        <AppBar className={classes.appBar} position="static" color="inherit">
            <div className="classes.brandContainer">
                {/* I am making the words link back to the home page */}
                <Typography component={Link} to='/' className={classes.heading }variant="h2" align="center">
                Memories
                <img className={classes.image} src={memories} alt="memories" height="60"/>
            </Typography>
            </div>
            <Toolbar className={classes.toolbar}>
                {/* if a user is logged in, they will be shown something */}
                {user ? (
                    <div className={classes.profile}>  
                        <Avatar className={classes.purple} alt={user.result.name} src={user.result.imageUrl}>{user.result.name.carAt(0)}</Avatar>
                        <Typography className={classes.userName} variant="h6">{user.result.name}</Typography>
                        <Button variant="contained" className={classes.logout} color="secondary">Logout</Button>
                    </div>
                ) : (

                )}
            </Toolbar>
            
        </AppBar>
    )
}

export default Navbar;
