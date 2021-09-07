// this will handle all the handlers for the posts.js in routes

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
    const newPost = new PostMessage(post)

    try {
        // this is an asynchrnous action
        await newPost.save()

        res.status(201).json(newPost)
    } catch(error) {
        res.status(409).json({message: error.message});

    }
}