// express declarations
const express = require('express');
const app = express();

// requires
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const mongoSanitize = require('express-mongo-sanitize');
const bodyParser = require("body-parser");
require('dotenv').config()


// app using
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//  secure app by using various http headers.
app.use(helmet());

// Data sanitization against NoSQL query injection
app.use(mongoSanitize());
// integrations


// Data sanitization against XSS
// app.use(xss());

app.use(express.json({limit: '100kb'}));
app.use(express.urlencoded({ extended: false }));
// Limit requests form same IP Address
const limiter = rateLimit({
    max: 100,
    windowMs: 60 * 60 * 1000,
    status: 'fail',
    message: 'Too many request from this IP, please try again in an hour!'
})
app.use('/api', limiter);
app.listen(3000, () => {
    console.log("App is listening on port 3000");
})
module.exports = app;