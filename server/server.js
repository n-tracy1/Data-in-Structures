//this will be the core of the backend - this starts the server

const express = require('express');
const app = express();
const path = require('path');

app.get('*', (req, res) => {
    res.status(404).send('Testing');
})

app.listen(3000);