import express from 'express';

const router = express.Router();

import { getWash, createWash, updateWash, deleteWash } from '../controllers/user.js';

// GET todos
router.get('/', getWash)

// POST create a todo
router.post('/', createWash)

// DELETE remove a todo
router.delete('/:id', deleteWash)

// PUT updating a todo
router.put('/:id', updateWash)
export default router;