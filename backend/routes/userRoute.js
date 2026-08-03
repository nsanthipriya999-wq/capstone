import express from 'express';

const router = express.Router();

import { registerUser,loginUser } from '../controllers/userController.js';

// ----http://localhost:3000/register----------------

router.post('/register', registerUser)

// ----http://localhost:3000/login----------------

router.post('/login', loginUser)


export default router;