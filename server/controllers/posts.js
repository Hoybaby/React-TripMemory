// this will handle all the handlers for the posts.js in routes

import mongoose  from "mongoose";
import PostMessage from "../models/postMessage.js";

export const getPosts = async (req,res) => {
    try {

        const postMessages = await PostMessage.find();
        // console.log(postMessages)
        res.status(200).json(postMessages)

    } catch(error) {
        res.status(404).json({message: error.message})
    }
}

export const createPost = async (req, res) => {

    const post = req.body;

    // this PostMessage is the schema that is in the models which will get formatted from a simple form down the road
    // changed the name of the schema to postMessage so have to go to models
    const newPostMessage = new PostMessage({...post, creator: req.userId, createdAt: new Date().toISOString()});

    try {
        // this is an asynchrnous action
        await newPostMessage.save()

        res.status(201).json(newPostMessage)
    } catch(error) {
        res.status(409).json({message: error.message});

    }
}

export const updatePost = async (req, res) => {
    const {id: _id} = req.params;
    // this will be recieved from the front end
    const post = req.body;

    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send("No post with that id");
    
    // need the keyword await to gain access to the data
    const updatedPost = await PostMessage.findByIdAndUpdate(_id, post, {new: true});
    
    res.json(updatedPost);
}

export const deletePost = async (req, res) => {
    const {id: _id} = req.params;

    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send("No post with that id");
    
    await PostMessage.findByIdAndRemove(_id);

    res.status(200).send("Post deleted");
}

export const likePost = async (req, res) => {

    const {id: _id} = req.params;

    // user is not authenticated.
    if(!req.userId) return res.json({message: "You must be logged in to like a post"});
    
    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send("No post with that id");
    
    // have to look for the post we are looking for which is handled below.
    const post = await PostMessage.findById(_id);

    // if that is the case , that means his id is already in there and cant like the post more than once
    const index = post.likes.findIndex((id) => id === String(req.userId));

    if(index === -1) {
        // like the post
        post.likes.push(req.userId);
    }else {
        // dislike the post
        post.likes = post.likes.filter((id) => id !== String(req.userId));
    }    

    // we want to pass the update and have access to the updated post
    // removing the likes because the new post will contain the like itself
    const updatedPost = await PostMessage.findByIdAndUpdate(_id, post, {new: true});
    res.json(updatedPost);
}