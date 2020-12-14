import * as express from "express";
const router = express.Router();
const authController = require("../../controllers/auth/index")
router.post("/register",authController.createAccount);