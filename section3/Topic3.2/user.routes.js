import express from 'express';
import { getAllUsers, addUser } from '../controllers/userController.js'; // Named imports
const router = express.Router(); // Create a router instance
// Define routes
router.get('/users', getAllUsers); // Handle GET requests for users
router.post('/users', addUser); // Handle POST requests to add a user
export default router; 
