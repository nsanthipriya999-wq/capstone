import express from 'express';


import {getPromotions,getPromotionById,createPromotion,updatePromotion,deletePromotion } from '../controllers/promotionController.js';

import authMiddleware from "../middleware/authMiddleware.js";
import adminMiddleware from "../middleware/adminMiddleware.js"
const router = express.Router();

//-------------Public Routes------------------------
// ----http://localhost:3000/getPromotions--or getPromotionById--------------

router.get("/",getPromotions);
router.get("/:id",getPromotionById);
router.get("/active",getActivePromotions);



//------------Admin Routes------------------------
// ----http://localhost:3000/createPromotion---------------

router.post('/', authMiddleware,adminMiddleware,createPromotion);

// ----http://localhost:3000/updateService----------------

router.patch('/:id', authMiddleware,adminMiddleware,updateService);

// ----http://localhost:3000/deleteService----------------

router.delete('/:id', authMiddleware,adminMiddleware,deleteService);

export default router;