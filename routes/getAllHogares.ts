import express from 'express';
import getAllHogaresController from '../controllers/getAllHogaresController';
const router = express.Router();

router.get('', getAllHogaresController);

export default router;