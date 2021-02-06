import { Request, Response } from "express";
import Validations from "../../utils/Validations";
import BaseResponse from "../../services/BaseResponse";
import SubscriptionDb from "../../data/models/subscription";
export default class SubscriptionsController {
    static async addSubscription(req: Request, res: Response) {
        const validation = Validations.subscriptionValidation(req.body);
        if(validation.error) BaseResponse(res).error(400, validation.message);
        const { name, url, amount, activationDate, dueDate, subscriber } = req.body;
        try{
            const subscription = new SubscriptionDb({ name, url, amount, activationDate, dueDate, subscriber })
            await subscription.save();
            BaseResponse(res).success(200, "Account created successfully", subscription.toJSON());
        } catch(err){
            console.log(err);
            BaseResponse(res).error(500, err);
        }

    }
}