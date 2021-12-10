import mongoose from 'mongoose';  

const postSchema = mongoose.Schema({
    // each post will have a title
    title: String,
    message: String,
    name: String,
    creator: String,
    tags: [String],
    selectedFile: String,
    likes: {
        type: [String],
        default: []
    },
    createdAt: {
        type: Date,
        default: new Date()
    },

})

const PostMessage = mongoose.model('PostMessage', postSchema)
// exporting mongoose model so we can run commands run, find, update and delete
export default PostMessage;