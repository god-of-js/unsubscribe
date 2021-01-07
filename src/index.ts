// express declarations
import express, { Request, Response, NextFunction, Application } from 'express'
const app: Application = express();

// requires
const cors = require("cors");
const helmet = require("helmet");
const rateLimit = require("express-mongo-sanitize");
const mongoSanitize = require("express-mongo-sanitize");
const bodyParser = require("body-parser");
require("dotenv").config()

// Imports
import route from "./config/router";
import "./data/db";
// app using
app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//  secure app by using various http headers.
app.use(helmet());
// router initialization.
route(app);
// Data sanitization against NoSQL query injection
app.use(mongoSanitize());
// integrations


// Data sanitization against XSS
// app.use(xss());

app.use(express.json({ limit: "100kb" }));
app.use(express.urlencoded({ extended: false }));
// Limit requests form same IP Address
const limiter = rateLimit({
    max: 100,
    windowMs: 60 * 60 * 1000,
    status: 'fail',
    message: 'Too many request from this IP, please try again in an hour!'
})
app.use("/api", limiter);
const port = 3000;
app.listen(port, () => {
    console.log("App is listening on port " + port);
})
// console.log(require('crypto').randomBytes(256).toString('base64'))
module.exports = app;