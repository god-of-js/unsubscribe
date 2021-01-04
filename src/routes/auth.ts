import { Router } from "express";
import AuthController from "../controllers/auth/AuthController"
import AuthMiddlewares from "../middleware/AuthMiddlewares"
const router = Router();

router.post("/register", AuthMiddlewares.userExists, AuthController.register);
router.post("/login", AuthMiddlewares.emailAndPasswordMatch, AuthController.login);
export default router;