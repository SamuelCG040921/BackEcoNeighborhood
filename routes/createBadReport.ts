import express from 'express';
import createBadReportController from '../controllers/createBadReportController';
const router = express.Router()

router.post('', createBadReportController);

export default router