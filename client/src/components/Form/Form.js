import React, {useState} from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import FileBase from 'react-file-base64';
import {useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';


import useStyles from './styles';
import { createPost, updatePost } from '../../actions/posts';

const Form =({currentId, setCurrentId}) => {
    
    const [postData, setPostData] = useState({
        creator: '',
        title:'',
        message: '',
        tags: '',
        selectedFile: ''
    })
    const classes= useStyles();

    const dispatch = useDispatch();

    const posts = useSelector((state) => currentId ? state.posts.find((p) => p._id === currentId) : null);

    

    const clear = () => {
        
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        // 
        if(currentId) {
            dispatch(updatePost(currentId, postData));
        } else {
            // if we dont have a currently selected Id, we are creating a post and not updating
            dispatch(createPost(postData));
        }

        
    }
    return (
        <Paper className={classes.paper}>
            {/* need to have mutiple classes so template string is used */}
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}> 
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
                <div className={classes.fileInput}>
                <FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} />
                </div>
                <Button className={classes.buttonSubmit} type="submit" variant="contained" color="primary" size="large" fullWidth>Submit</Button>
                <Button  variant="contained" color="secondary" size="small" fullWidth onClick={clear}> Clear </Button>
            </form>
        </Paper>
    )
}

export default Form;