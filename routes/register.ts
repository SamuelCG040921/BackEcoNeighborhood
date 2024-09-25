import express from 'express';
import {validatorParams, validator} from '../middleware/register-validator';
import registerController from '../controllers/registerController';
const router = express.Router();

router.post('/', validatorParams, validator, registerController);

export default router