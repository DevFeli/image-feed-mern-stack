import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
        name: String,
        email:String,
        password:String,
        profileImage:String,
        bio:String
    },
    {
        timestamps:true
    }
)

export default User = mongoose.model('User', UserSchema)