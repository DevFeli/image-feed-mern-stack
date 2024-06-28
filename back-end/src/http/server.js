import 'dotenv/config'
import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import cors from 'cors'

import '../database/db.js'

import router from '../routes/router.js'

const PORT = process.env.PORT

const app = express()

//resolve paths
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

//config data entries
app.use(express.json())
app.use(express.urlencoded({extended: false}))

//config cors
app.use(cors({credentials: true, origin:"http://localhost:3000"}))

//statics
//uploads images
app.use("/uploads", express.static(path.resolve(__dirname, '..', 'public', 'uploads')))


//routes
app.use(router)

app.listen(PORT, () =>{
    console.log("Server started on port " + PORT)
})