import { Router } from 'express'

import {photoInsertValidation} from './../middlewares/photoValidation.js';
import authGuard from '../middlewares/authGuard.js';
import validate from '../middlewares/handleValidations.js';
import { imageUpload } from '../middlewares/imageUpload.js'

import { allPhotos, deletePhoto, getPhotoById, insertPhoto, likePhoto, updatePhoto } from './../controllers/PhotoController.js';

const photoRouter = Router()

photoRouter.post("/", authGuard, imageUpload.single("image"), photoInsertValidation(), validate, insertPhoto)

photoRouter.delete("/:id", authGuard, deletePhoto)

photoRouter.get("/", authGuard, allPhotos)

photoRouter.get("/user/:id", authGuard, allPhotos)

photoRouter.get("/:id", authGuard, getPhotoById)

photoRouter.put("/:id", authGuard, updatePhoto)

photoRouter.put("/like/:id", authGuard, likePhoto)

export default photoRouter