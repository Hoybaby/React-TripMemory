import React, {useState} from 'react';
import { Avatar, Button, Paper, Grid, Typography, Container, Icon} from '@material-ui/core';
import {GoogleLogin} from 'react-google-login';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { useDispatch } from 'react-redux';
import {useNavigate} from 'react-router-dom';
import { signin, signup } from '../../actions/auth';


import Input from './Input';
import icon from './icon';
import useStyles from './styles'


const initialState = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
}

const Auth = () => {

    const classes = useStyles();

    const [formData, setFormData] = useState(initialState);

    // this is going to handle if we are going to show our password later
    const [ showPassword, setShowPassword ] = useState(false);
    const[isSignup, setIsSignup] = useState(false);
    const state = null;

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        // if(isSignup){
        //     dispatch(signup(formData, navigate));
        // } else {
        //     dispatch(signin(formData, navigate));
        // }

        console.log(formData);
    }

    // we need a prev state. when we are changing the state of the old state, we need to call the prev
    // so this will be able to toggle the password
    const handleShowPassword = () => setShowPassword(( prevShowPassword => !prevShowPassword));

    const handleChange = (e) => {
        // we spread the form and then we update the only specific field that we want to change
        setFormData({...formData, [e.target.name]: e.target.value}); //this will make to spread the propertries
    }

    const switchMode = () => {
        setIsSignup(prevIsSignup => !prevIsSignup);
        setShowPassword(false);
    }

    const googleSuccess = async (res) => {
        // ?. special operator that not going to throw an erro if we dont have acces to the rest object
        const result = res?.profileObj; 
        const token = res?.tokenId;

        try {
            // history belongs to react router dom. this will redirect us to homepage when logged in
            dispatch({type: 'AUTH', data: {result, token}})
            navigate('/');
        } catch {
            console.log('error');
        }
    }

    const googleFailure = (error) => {
        console.log(error);
        console.log("Google sign in unsuccessful");

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
                                    <Input name="lastName" label="Last Name" type="text" handleChange={handleChange} half />
                                    
                                </>
                            )
                        } 
                        <Input name="email" label="Email address" type="email" handleChange={handleChange} />
                        {/* so the input below will check the state before deciding what kind of type it should be */}
                        <Input name="password" label="Password" handleChange={handleChange} type={showPassword ? "text" : "password"} handleShowPassword={handleShowPassword} />
                        { isSignup && <Input name="confirmPassword" label="Repeat Password" type="password" handleChange={handleChange} />}
                    </Grid>
                    
                    {/* button will display two kind of texts */}
                    <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
                        {isSignup ? 'Sign Up' : 'Sign In'}
                    </Button>
                    <GoogleLogin 
                        clientId="1022610916196-vu8vvlme2p3o7evlqfj30att2ho4c076.apps.googleusercontent.com"
                        render={(renderProps) => (
                            <Button 
                                className={classes.googleButton} 
                                color="primary" 
                                fullWidth 
                                onClick={renderProps.onClick} 
                                disabled={renderProps.disabled} 
                                startIcon={<Icon/>} 
                                variant='contained'
                            > 
                            Google Sign in
                            </Button>
                        )}
                        onSuccess={googleSuccess}
                        onFailure={googleFailure}
                        cookiePolicy="single_host_origin"
                    /> 
                    <Grid container justifyContent="flex-end">
                        <Grid item>
                            <Button onClick={switchMode}> 
                                {isSignup? 'Already have an account? Sign in' : 'Don\'t have an account? Sign up'}
                            </Button>
                        </Grid>

                    </Grid>
                </form>
            </Paper>
        </Container>
    )
}

export default Auth;
