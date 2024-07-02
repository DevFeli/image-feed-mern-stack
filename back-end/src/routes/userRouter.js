import express from 'express'
import { register, login, getCurrentUser } from "../controllers/UserController.js";

//middlewares
import handleValidations from "../middlewares/handleValidations.js"
import { userCreateValidation, loginValidation } from '../middlewares/userValidations.js'
import authGuard from '../middlewares/authGuard.js'; 

const userRouter = express.Router()

userRouter.post('/register', userCreateValidation(), handleValidations, register)

userRouter.post('/login', loginValidation(), handleValidations, login)

userRouter.get("/profile", authGuard, getCurrentUser)

export default userRouter

