import React, {useState, useEffect} from 'react'
import {Link, useNavigate} from 'react-router-dom';
import { AppBar, Avatar, Toolbar, Typography, Button } from '@material-ui/core';

import { useDispatch } from 'react-redux';

import useStyles from './styles';
import memories from '../../images/memories.png';
// import Auth from '../Auth/Auth';

const Navbar = () => {

    const classes = useStyles();
    
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));

    const dispatch = useDispatch();
    const navigate = useNavigate();

    console.log(user);

    useEffect(() => {
        const token = user?.token;

        // JWT later

        setUser(JSON.parse(localStorage.getItem('profile')));
    }, []);

    const logout =() => {
        dispatch({
            type: 'LOGOUT'
        });

        navigate('/');

        setUser(null);


    }

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
                        <Avatar className={classes.purple} alt={user.result.name} src={user.result.imageUrl}>{user.result.name.charAt(0)}</Avatar>
                        <Typography className={classes.userName} variant="h6">{user.result.name}</Typography>
                        <Button variant="contained" className={classes.logout} color="secondary" onClick={logout}>Logout</Button>
                    </div>
                ) : (
                    <Button component={Link} to='/auth' variant="contained" color="primary"> Sign In</Button>
                )}
            </Toolbar>
            
        </AppBar>
    )
}

export default Navbar;
