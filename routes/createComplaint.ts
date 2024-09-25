import express from 'express';
import createComplaintController from '../controllers/createComplaintController';
const router = express.Router()

router.post('/', createComplaintController);

export default router