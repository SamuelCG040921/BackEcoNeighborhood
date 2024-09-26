import express from 'express';
import getAllComplaintsController from '../controllers/getAllComplaintsController';
const router = express.Router();

router.get('', getAllComplaintsController);

export default router;