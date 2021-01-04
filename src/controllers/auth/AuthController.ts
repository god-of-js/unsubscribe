import { Request, Response } from "express";
import Validations from "../../utils/Validations";
import BaseResponse from "../../services/BaseResponse";
import hasher from "../../services/hasher";
import { UserInterface } from "../../@types/models"
import UserSchema from "../../data/models/user"
class AuthController {
    static async register(req: Request, res: Response) {
        const validations = await Validations.userVerification(req.body);
        if (validations.error === true)  BaseResponse(res).error(400, validations.message);
        let { email, phone, password, name } = req.body;
        password = hasher(password, email).hash;
        try {
            const user = new UserSchema({ email: email.toLowerCase(), phone, password, name });
            await user.save();
            BaseResponse(res).success(200, "Account created successfully", user.toJSON());
        }
        catch (err) {
            console.log(err);
            BaseResponse(res).error(500, err);
        }
    }
    static async login(req: Request, res: Response) {
        const validations = await Validations.emailAndPassword(req.body);
        if (validations.error === true)  BaseResponse(res).error(400, validations.message);
        const user = await UserSchema.findOne({email: req.body.email})

        BaseResponse(res).success(200, "Account created successfully", user || {boom: "e don enter"});
    }
}
export default AuthController;