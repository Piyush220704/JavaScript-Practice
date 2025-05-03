import express from 'express'
const router = express.Router()
import {signup, update, bulk, signin, logout} from '../controllers/user.controller.js'
import authMiddleware from '../middleware/auth.middleware.js'

router.post('/signup', signup);
router.put('/update', authMiddleware, update);
router.get('/bulk', authMiddleware, bulk);
router.post('/signin', signin);
router.post('/logout', logout);
export default router