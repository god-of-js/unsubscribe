const jwt = require("jsonwebtoken");
import {JWT_ISSUER,JWT_SECRET} from "../config/secrets";
import { UserInterface } from "../@types/models";
const jwtOptions = {
    expiresIn: "2d",
    issuer: JWT_ISSUER
}

export default class Tokeniser {
    static createToken(payload: UserInterface): string {
        const token = jwt.sign(payload,JWT_SECRET, jwtOptions);
        return token;
    }
    static verify(token: string): object | string{
        const decode = jwt.verify(token, JWT_SECRET);
        return decode;
    }
}