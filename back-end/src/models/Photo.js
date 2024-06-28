import mongoose from 'mongoose'

const PhotoSchema = new mongoose.Schema({
    image:String,
    title:String,
    likes:Array,
    comments:Array,
    userId:mongoose.ObjectId,
    userName: String
},{
    timestamps:true
})

const Photo = mongoose.model('Photo', PhotoSchema)

export default Photo