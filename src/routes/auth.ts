import { Router } from "express";
import Auth from "../controllers/auth"
const router = Router();

router.post("/register", Auth.register);
export default router;