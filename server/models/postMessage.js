import mongoose from 'mongoose';  

const postSchema = mongoose.Schema({
    // each post will have a title
    title: String,
    message: String,
    creator: String,
    tags: [String],
    selectedFile: String,
    likeCount: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: new Date()
    },

})

const PostMessage = mongoose.model('PostMessage', postSchema)

export default PostMessage;