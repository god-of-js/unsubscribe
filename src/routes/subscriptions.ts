import { Router } from "express";
import SubscriptionsController from "../controllers/subscriptions/SubscriptionsController"
import AuthMiddlewares from "../middleware/AuthMiddlewares"
const router = Router();

router.post("/add-subscription", AuthMiddlewares.checkToken, SubscriptionsController.addSubscription);
export default router;