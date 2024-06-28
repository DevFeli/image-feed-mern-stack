import 'dotenv/config'
import express from 'express'
import path from 'path'
import cors from 'cors'

import router from '../routes/router.js'

const PORT = process.env.PORT

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use(router)

app.listen(PORT, () =>{
    console.log("Server started on port " + PORT)
})