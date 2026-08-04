import express from 'express';


import {getServices,getServiceById,createService,updateService,deleteService } from '../controllers/serviceController.js';

import authMiddleware from "../middleware/authMiddleware.js";
import adminMiddleware from "../middleware/adminMiddleware.js"
const router = express.Router();

//-------------Public Routes------------------------
// ----http://localhost:3000/getServices--or getServiceById--------------

router.get("/",getServices);
router.get("/:id",getServiceById);


//------------Admin Routes------------------------
// ----http://localhost:3000/createService---------------

router.post('/', authMiddleware,adminMiddleware,createService);

// ----http://localhost:3000/updateService----------------

router.post('/:id', authMiddleware,adminMiddleware,updateService);

// ----http://localhost:3000/deleteService----------------

router.post('/:id', authMiddleware,adminMiddleware,deleteService);

export default router;