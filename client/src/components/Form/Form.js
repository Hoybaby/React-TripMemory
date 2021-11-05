import React, {useState} from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';


import useStyles from './styles';

const Form =() => {
    const classes= useStyles();

    const [postData, setPostData] = useState({
        creator: '',
        title:'',
        message: '',
        tags: '',
        selectedFile: ''
    })

    const handleSubmit = () => {

    }
    return (
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={classes.form} onSubmit={handleSubmit}> 
                <Typography variant="h6" >Creating a Memory</Typography> 
                <TextField 
                    name="creator"
                    variant="outlind" 
                    label="Creator" 
                    fullWidth
                    value={postData.creator}
                    // the whole data will be stored in the state and each object key will be a different text field
                    onChange={} 
                /> 
            </form>
        </Paper>
    )
}

export default Form;