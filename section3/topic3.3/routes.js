import express from 'express';
import { getAllUsers,addUser } from '../controller/userController.js';

const router=express.Router();

router.get('/users',getAllUsers);
router.post('/users',addUser);

export default router