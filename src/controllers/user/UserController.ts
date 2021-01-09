import { Request, Response } from "express";
import BaseResponse from "../../services/BaseResponse";
import Tokeniser from "../../utils/tokeniser";
import UserSchema from "../../data/models/user";
export default class UserController {
    static getUser(req:Request, res: Response) {
        console.log("enterred the controller")
        const token = req.header("authorization")?.split(" ")[1];
        const userVerification = Tokeniser.verify(token as string);
        let userObj = JSON.parse(userVerification as string);
        console.log(userObj, "OBJ");
        UserSchema.find({_id: userObj._id}).then(user => {
            console.log(user, "User");
            if(!user) return BaseResponse(res).error(400, "User does not exist", true);
            else return BaseResponse(res).success(200, "", user);
        }).catch(err => {
            return BaseResponse(res).error(400, err);
        });
        
    }
}