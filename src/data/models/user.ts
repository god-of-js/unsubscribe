import * as mongoose from "mongoose";
import { UserInterface } from "../../@types/models";
const Schema = mongoose.Schema;
const userSchema = new Schema({
    name: {type: String, required: [true, "Provide Name"]},
    email: {type: String, required: [true, "Provide Email"], unique: true},
    phone: {type: String, required: [true, "Provide Phone"], unique: true},
    password: {type: String, required: [true, "Provide Password"]},
    token: {type: String}
}, {timestamps: true})

export default mongoose.model<UserInterface>("User", userSchema);
