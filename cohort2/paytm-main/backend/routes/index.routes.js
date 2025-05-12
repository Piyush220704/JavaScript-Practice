import express from "express"
import userRotuer from './user.routes.js'
import accountRouter from './account.routes.js'
import authMiddleware from "../middleware/auth.middleware.js"
import User from "../models/users.model.js"
const router = express.Router()
router.use('/me', authMiddleware, async (req, res) => {
    const user = await User.findById(req.userId).select("-password");
  if (!user) return res.status(404).json({ message: "User not found" });
  res.json(user);
});
router.use('/user', userRotuer)
router.use('/account', accountRouter)

export default router