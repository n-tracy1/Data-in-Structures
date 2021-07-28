//this will be the core of the backend - this starts the server

const express = require('express');
const app = express();
const path = require('path');
const apiRouter = require('./routes/api');

app.use(express.json());

app.use('/api', apiRouter);

app.get('*', (req, res) => {
    res.status(404).send('Testing');
})

app.use((err, req, res, next) => {
    const defaultErr = {
        log: 'Express error handler caught an unknown middleware error',
        status: 500,
        message: { err: 'An error has occurred' }
    };
    const errorObj = Object.assign(defaultErr, err);
    console.log(errorObj.log);
    return res.status(errorObj.status).json(errorObj.message);
})

app.listen(3000);