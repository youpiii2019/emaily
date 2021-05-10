const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
require('./models/User');
require('./services/passport');


// connect to our mongodb
mongoose.connect(keys.mongoURI, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
});

// create express app
const app = express();

// routers
require('./routes/authRoutes')(app);

// listener
const PORT = process.env.PORT || 5000; // dev default 5000
app.listen(PORT);