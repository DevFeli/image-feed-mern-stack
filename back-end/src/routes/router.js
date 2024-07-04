import express from 'express'
import userRouter from './userRouter.js'
import photoRouter from './photoRouter.js'
const router = express()

//user routes
router.use("/api/users",userRouter)
router.use("/api/photos", photoRouter)
//initial route
router.get('/', (req, res) => {
    res.send("API WORKING")
})

export default router