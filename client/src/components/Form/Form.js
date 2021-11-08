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
                    variant="outlined" 
                    label="Creator" 
                    fullWidth
                    value={postData.creator}
                    // the whole data will be stored in the state and each object key will be a different text field
                    onChange={(e) => setPostData({...postData, creator: e.target.value})}
                />
                <TextField 
                    name="title"
                    variant="outlined" 
                    label="Title" 
                    fullWidth
                    value={postData.title}
                    // the whole data will be stored in the state and each object key will be a different text field
                    onChange={(e) => setPostData({...postData, title: e.target.value})}
                /> 
                <TextField 
                    name="message"
                    variant="outlined" 
                    label="Message" 
                    fullWidth
                    value={postData.message}
                    // the whole data will be stored in the state and each object key will be a different text field
                    onChange={(e) => setPostData({...postData, message: e.target.value})}
                /> 
                <TextField 
                    name="tags"
                    variant="outlined" 
                    label="Tags" 
                    fullWidth
                    value={postData.tags}
                    // the whole data will be stored in the state and each object key will be a different text field
                    onChange={(e) => setPostData({...postData, tags: e.target.value})}
                />  
            </form>
        </Paper>
    )
}

export default Form;