import express from 'express'
import { register, login } from "../controllers/UserController.js";

//middlewares
import handleValidations from "../middlewares/handleValidations.js"
import { userCreateValidation, loginValidation } from '../middlewares/userValidations.js'

const userRouter = express.Router()

userRouter.post('/register', userCreateValidation(), handleValidations, register)

userRouter.post('/login', loginValidation(), handleValidations, login)

export default userRouter

