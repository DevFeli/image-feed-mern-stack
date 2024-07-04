import { Router } from 'express'

import {photoInsertValidation} from './../middlewares/photoValidation.js';
import authGuard from '../middlewares/authGuard.js';
import validate from '../middlewares/handleValidations.js';
import { imageUpload } from '../middlewares/imageUpload.js'

import { allPhotos, commentPhoto, deletePhoto, getPhotoById, insertPhoto, likePhoto, searchPhotos, updatePhoto } from './../controllers/PhotoController.js';

const photoRouter = Router()

photoRouter.post("/", authGuard, imageUpload.single("image"), photoInsertValidation(), validate, insertPhoto)

photoRouter.delete("/:id", authGuard, deletePhoto)

photoRouter.get("/", authGuard, allPhotos)

photoRouter.get("/user/:id", authGuard, allPhotos)

photoRouter.get("/search", authGuard, searchPhotos)

photoRouter.get("/:id", authGuard, getPhotoById)

photoRouter.put("/:id", authGuard, updatePhoto)

photoRouter.put("/like/:id", authGuard, likePhoto)

photoRouter.put("/comment/:id", authGuard, commentPhoto)



export default photoRouter