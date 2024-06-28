import express from 'express'
import { register } from "../controllers/UserController.js";

//middlewares
import handleValidations from "../middlewares/handleValidations.js"
import { userCreateValidation } from '../middlewares/userValidations.js'

const userRouter = express.Router()

userRouter.post('/register', userCreateValidation(), handleValidations, register)

export default userRouter

