import express from 'express';
import colors from 'colors';
import dotenv from 'dotenv';
import morgan from 'morgan';
import connectDB from './config/db.js';

//configure env
dotenv.config(); //as it is in the root directory so we dont need to define oath inside bracket

//rest object
const app = express();

//Database confif
connectDB();

//Middlewares
app.use(express.json());
app.use(morgan('dev'));

//rest api

app.get('/', (req, res) => {
    res.send('<h1>Welcome to E-Commerece app</h1>');
})

//PORT
const PORT = process.env.PORT || 8080;

//run
app.listen(PORT, (req, res) => {
    console.log(`Server running on ${process.env.DEV_MODE} mode on port ${PORT}`.bgCyan.black);
});