import express from 'express'
import userRouter from './userRouter.js'

const router = express()

//user routes
router.use("/api/users",userRouter)

//initial route
router.get('/', (req, res) => {
    res.send("API WORKING")
})

export default router