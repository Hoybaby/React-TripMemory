import React, {useState} from 'react';
import { Avatar, Button, Paper, Grid, Typography, Container, Typography } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Input from './Input';

import useStyles from './styles'

const Auth = () => {

    const classes = useStyles();
    // this is going to handle if we are going to show our password later
    const [ showPassword, setShowPassword ] = useState(false);

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
                                    <Input name="firstName" label="First Name" type="text" handleChange={handleChange} autoFocus half />
                                    <Input name="firstName" label="First Name" type="text" handleChange={handleChange} half />
                                    
                                </>
                            )
                        } 
                        <Input name="email" label="Email address" type="email" handleChange={handleChange} autoFocus />
                        {/* so the input below will check the state before deciding what kind of type it should be */}
                        <Input name="password" label="Password" type={showPassword ? "text" : "password"} handleShowPassword={handleShowPassword} />
                    </Grid>
                </form>
            </Paper>
        </Container>
    )
}

export default Auth;
