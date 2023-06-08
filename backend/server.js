const express = require('express');
const dotenv =require('dotenv').config()
const colors = require('colors')
const {errorHandler} = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')
const port = process.env.port || 5000


connectDB()
const app = express()

// setting what we pass into endpoints
app.use(express.json());
app.use(express.urlencoded({extended: false}))

app.use('/api/places', require('./routes/placesRoutes'));
app.use('/api/users', require('./routes/userRoutes'));

app.use(errorHandler);

app.listen(port, () => console.log('Server started at port- ', port))