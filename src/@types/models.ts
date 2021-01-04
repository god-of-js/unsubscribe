import { Document } from "mongoose";
export interface UserInterface extends Document {
    _id?: string,
    email: string,
    fullName?: string,
    phoneNumber?: number,
    password: string,
}
export interface ValidationResponse {
    error: boolean,
    message: string
}
export interface Token {
    
}