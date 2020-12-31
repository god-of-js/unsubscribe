import {Request, Response} from "express";
import Validations from "../../utils/validations";
import BaseResponse from "../../services/response"
 class Auth {
    static async register(req: Request, res: Response) {
        let validations = await Validations.userVerification(req.body);
        if(validations.error === true) BaseResponse(res).error(400, validations.message, {});

    }
}
export default Auth;