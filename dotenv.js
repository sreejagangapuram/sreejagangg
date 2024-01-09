const dotenv = require('dotenv');
dotenv.config();

const apiKey = process.env.API_KEY;
const dbUrl = process.env.DATABASE_URL;

console.log('API Key:', apiKey);
console.log('Database URL:', dbUrl);