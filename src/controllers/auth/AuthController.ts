import { Request, Response } from "express";
import Validations from "../../utils/Validations";
import BaseResponse from "../../services/BaseResponse";
import hasher from "../../services/hasher";
import Tokeniser from "../../utils/tokeniser"
import UserSchema from "../../data/models/user"
import {UserInterface} from "../../@types/models"
class AuthController {
    static async register(req: Request, res: Response) {
        const validations = await Validations.userVerification(req.body);
        if (validations.error === true)  BaseResponse(res).error(400, validations.message);
        let { email, phone, password, name } = req.body;
        password = hasher(password, email).hash;
        const data = { email: email.toLowerCase(), phone, password, name, token: "" };
        data.token = Tokeniser.createToken(data as UserInterface);
        try {
            const user = new UserSchema(data);
            await user.save();
            BaseResponse(res).success(200, "Account created successfully", user.toJSON());
        }
        catch (err) {
            BaseResponse(res).error(500, err);
        }
    }
    static async login(req: Request, res: Response) {
        const validations = await Validations.emailAndPassword(req.body);
        if (validations.error === true)  BaseResponse(res).error(400, validations.message);
        const user = await UserSchema.findOne({email: req.body.email});
        const data = { email: user?.email, phone: user?.phone, password: user?.password, name: user?.name, token: "" };
        if(user) user.token = Tokeniser.createToken(data as UserInterface);
        try {
            user?.save();
        }
        catch (err) {
            BaseResponse(res).error(500, err);
        }
        BaseResponse(res).success(200, "User logged in successfully", user || {user: null});
    }
}
export default AuthController;