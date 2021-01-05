import {Request, Response, NextFunction} from "express";
import User from "../data/models/user";
import BaseResponse from "../services/BaseResponse";
import hasher from '../services/hasher';

class AuthMiddlewares {
    static async userExists(req: Request, res: Response, next: NextFunction) {
        const email: string = req.body.email.toLowerCase();
        try {
            const exists = await User.findOne({ email })
            const phoneExists = await User.findOne({ phone: req.body.phone})
            if(phoneExists) BaseResponse(res).error(400, "Phone Number exists in our database. Try signing in.", false);
            if(exists) BaseResponse(res).error(400, "Email exists in our database. Try signing in.", false);
            else next();
        } catch(err) {
            BaseResponse(res).error(500, err, false)
        }
    }
    static async emailAndPasswordMatch(req: Request, res: Response, next: NextFunction) {
        const {email, password} = req.body;
        const user = await User.findOne({email})
        if(!user)  BaseResponse(res).error(400, "Email does not exist in our database. Try signing in.");
        const hashedPassword = hasher(password, email).hash
        if(user?.password !== hashedPassword)   BaseResponse(res).error(400, "Incorrect password. Try forgot password");
        else next();
    }
    static async checkToken(){}
}
export default AuthMiddlewares;