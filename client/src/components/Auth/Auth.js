import React from 'react';
import { Avatar, Button, Paper, Grid, Typography, Container, Typography } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

import useStyles from './styles'

const Auth = () => {

    const classes = useStyles();

    const state = null;

    const isSignup = false;

    const handleSubmit = () => {
        console.log('submit');
    }

    const handleChange = () => {
        console.log('change');
    }

    return (
        <Container compononent="main" maxWidth="sm">
            <Paper className={classes.paper} elevation={3}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                {/* using logic and iterator to determine if user is not signed up it will show Sign up */}
                <Typography variant="h5">{isSignup? 'Sign Up' : 'Sign in'} </Typography>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <Grid container spacing={2}> 
                        {
                            // if is SIgnup is true then it will show the following, which be two different inputs
                            isSignup && (
                                <>
                                    <TextField name="firstName" label="First Name" handleChange={handleChange} autoFocus xs={6}/>
                                    <TextField name="lastName" label="Last Name" handleChange={handleChange} autoFocus xs={6}/>
                                </>
                            )
                        }
                    </Grid>
                </form>
            </Paper>
        </Container>
    )
}

export default Auth;
