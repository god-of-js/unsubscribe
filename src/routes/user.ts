import { Router } from "express";
import UserController from "../controllers/user/UserController"
import AuthMiddlewares from "../middleware/AuthMiddlewares"
const router = Router();


router.get("/get-user", AuthMiddlewares.checkToken, UserController.getUser);
export default router;