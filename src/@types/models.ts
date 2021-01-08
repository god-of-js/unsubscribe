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
export interface Subscription extends Document {
    name: String,
    url?: String,
    amount: String,
    activationDate: Date,
    dueDate: Date,
    subscriber: String
}