import express from 'express';
import createComplaintController from '../controllers/createComplaintController';
import validateToken from '../middleware/validateToken';
const router = express.Router()

router.post('/', validateToken, createComplaintController);

export default router