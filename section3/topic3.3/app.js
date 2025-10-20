import express from 'express';
import mongoose from 'mongoose';
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'
import userRoutes from './routes/userRoutes.js';
const __dirname = dirname(fileURLToPath(import.meta.url))
const app = express();
app.use(express.json());
mongoose.connect('mongodb://localhost:27017/');
app.use('/api', userRoutes);
app.get('/', (req, res) => {
    res.sendFile(join(__dirname, 'views', 'index.html'))
})
app.listen(3000, () => console.log('Server running on port 3000')); 