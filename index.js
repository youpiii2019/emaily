const express = require('express');

// create express app
const app = express();

// route handlers
app.get('/', (req, res) => {
    res.send({ bye: 'bye '});
});

// listener
const PORT = process.env.PORT || 5000; // dev default 5000
app.listen(PORT);