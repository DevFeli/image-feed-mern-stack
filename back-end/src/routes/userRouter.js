import express from 'express'
import { register } from "../controllers/UserController.js";

import handleValidations from "../middlewares/handleValidations.js"

const userRouter = express.Router()

userRouter.post('/register', handleValidations, register)

export default userRouter

