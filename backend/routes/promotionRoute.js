//------------------------promotionRoute.js----------------------------------------------------------------
import express from 'express';
import { getPromotions, getPromotionById, getActivePromotions, createPromotion, updatePromotion, deletePromotion } from '../controllers/promotionController.js';

import authMiddleware from "../middleware/authMiddleware.js";
import adminMiddleware from "../middleware/adminMiddleware.js";

const router = express.Router();

//-------------Public Routes--------------------------------------------------------------
// ----http://localhost:3000/getPromotions--or getPromotionById----or getActivePromotions----------

router.get("/", getPromotions);
router.get("/active", getActivePromotions);
router.get("/:id", getPromotionById);




//------------Admin Routes------------------------
// ----http://localhost:3000/createPromotion---------------

router.post('/', authMiddleware, adminMiddleware, createPromotion);

// ----http://localhost:3000/updatePromotion----------------

router.patch('/:id', authMiddleware, adminMiddleware, updatePromotion);

// ----http://localhost:3000/deletePromotion----------------

router.delete('/:id', authMiddleware, adminMiddleware, deletePromotion);

export default router;