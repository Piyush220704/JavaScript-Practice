import express from 'express'
const router = express.Router()
import authMiddleware from '../middleware/auth.middleware.js';
import { getBalance, transfer } from '../controllers/account.controller.js';
router.get('/balance', authMiddleware,getBalance);
router.post('/transfer', authMiddleware,transfer);

export default router