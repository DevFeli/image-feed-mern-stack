import { Router } from 'express'

import photoInsertValidation from './../middlewares/photoValidation';
import authGuard from '../middlewares/authGuard';
import validate from '../middlewares/handleValidations';

const photoRouter = Router()

