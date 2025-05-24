import express from 'express';
import { dashboard, bookGas } from '../controllers/bookingController.js';
import { authenticate } from '../middleware/auth.js';

const router = express.Router();

router.get('/dashboard', authenticate, dashboard);
router.post('/booking', authenticate, bookGas);

export default router;
