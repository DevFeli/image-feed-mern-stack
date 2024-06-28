import express from 'express'
import path from 'path'
import cors from 'cors'

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.listen(3000, () =>{
    console.log("Server started.")
})