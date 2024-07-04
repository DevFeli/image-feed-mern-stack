import { Router } from 'express'

import {photoInsertValidation} from './../middlewares/photoValidation.js';
import authGuard from '../middlewares/authGuard.js';
import validate from '../middlewares/handleValidations.js';
import { imageUpload } from '../middlewares/imageUpload.js'

import { insertPhoto } from './../controllers/PhotoController.js';

const photoRouter = Router()

photoRouter.post("/", authGuard, imageUpload.single("image"), photoInsertValidation(), validate, insertPhoto)

export default photoRouter