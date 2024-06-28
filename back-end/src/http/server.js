import 'dotenv/config'
import express from 'express'
import path from 'path'
import cors from 'cors'

const PORT = process.env.PORT

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.listen(PORT, () =>{
    console.log("Server started on port " + PORT)
})