import express from 'express'
import { register, login, getCurrentUser, update, getUserById } from "../controllers/UserController.js";

//middlewares
import handleValidations from "../middlewares/handleValidations.js"
import { userCreateValidation, loginValidation, userUpdateValidation } from '../middlewares/userValidations.js'
import authGuard from '../middlewares/authGuard.js'; 
import { imageUpload } from '../middlewares/imageUpload.js';

const userRouter = express.Router()

userRouter.post('/register', userCreateValidation(), handleValidations, register)

userRouter.post('/login', loginValidation(), handleValidations, login)

userRouter.get("/profile", authGuard, getCurrentUser)

userRouter.put("/", authGuard, userUpdateValidation(), imageUpload.single("profileImage"), update)

userRouter.get("/:id", getUserById)

export default userRouter

