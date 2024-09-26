import express from 'express';
import getUserDataController from '../controllers/getUserDataController';
import validateToken from '../middleware/validateToken';
const router = express.Router();

router.get('', validateToken, getUserDataController);

export default router;