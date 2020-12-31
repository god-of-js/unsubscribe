import {Request, Response, NextFunction} from "express";
import User from "../data/models/user"
import BaseResponse from "../services/response"
class email {
    static async emailExists(req: Request, res: Response, next: NextFunction) {
        const email: string = req.body.email;
        try {
            const exists = User.findOne({email}).catch(err => {
                console.log(err);
                BaseResponse(res).error(500, err.message, {})});
            console.log(typeof exists);
            if(exists) BaseResponse(res).error(400, "Email exists in our database. Try signing in.", {});

        } catch(err) {
            BaseResponse(res).error(500, err, {})
        }

    }
}