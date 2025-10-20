import dotenv from 'dotenv';
dotenv.config();

const dbUrl = process.env.DB_URL;
const port = process.env.PORT || 3000;

console.log(`Database URL: ${dbUrl}`);
console.log(`Server running on port: ${port}`);