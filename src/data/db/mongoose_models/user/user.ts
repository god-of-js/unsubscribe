// const mongoose: any = require("mongoose");
import * as mongoose from "mongoose";
import { UserInterface } from "../../../../typescript_interfaces/user";
const {UserInterface} = require("../../../../typescript_interfaces/user")
const Schema = mongoose.Schema;
const userSchema = new Schema({
    name: {type: String, required: [true, "Provide Name"]},
    email: {type: String, required: [true, "Provide Email"], unique: true},
    phone: {type: String, required: [true, "Provide Phone"], minlength: 10, unique: true},
    password: {type: String, required: [true, "Provide Password"]},
    createdAt: {required: [true, "Provide date"]}
})
interface IUser extends UserInterface, mongoose.Document {}
const User = mongoose.model<IUser>('User', userSchema);
module.exports = User;  