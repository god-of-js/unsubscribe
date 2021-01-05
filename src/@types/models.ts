import { Document } from "mongoose";
export interface UserInterface extends Document {
    _id?: string,
    email: string,
    name?: string,
    phone?: number,
    password: string,
    token?: string
}
export interface ValidationResponse {
    error: boolean,
    message: string
}