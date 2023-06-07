const express = require('express');
const dotenv =require('dotenv').config()
const {errorMiddleware, errorHandler} = require('./middleware/errorMiddleware')
const port = process.env.port || 5000

const app = express()

// setting what we pass into endpoints
app.use(express.json());
app.use(express.urlencoded({extended: false}))

app.use('/api/goals', require('./routes/goalRoutes'));

app.use(errorHandler);

app.listen(port, () => console.log('Server started at port- ', port))