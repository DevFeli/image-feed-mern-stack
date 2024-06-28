import mongoose from 'mongoose'
const dbUser = process.env.DB_USER
const dbPassword = process.env.DB_PASS

const conn = async () =>{
    try{

        // const dbconn = await mongoose.connect(`mongodb:${dbUser}@${dbPassword}//localhost:27017/`)

        const dbconn = await mongoose.connect(`mongodb://localhost:27017/images_feed`)

        return dbconn
    }catch(e){
        console.log(e)
    }
}

conn()

export default conn