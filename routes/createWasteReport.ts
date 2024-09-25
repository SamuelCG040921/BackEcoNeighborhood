import express from 'express';
import createWasteReportController from '../controllers/createWasteReportController'
import validateToken from '../middleware/validateToken';
const router = express.Router();

router.post('/', validateToken,  createWasteReportController)

export default router;