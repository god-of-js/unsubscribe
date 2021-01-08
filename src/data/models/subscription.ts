import * as mongoose from "mongoose";
import { Subscription } from "../../@types/models";
const Schema = mongoose.Schema;
const subscriptionSchema = new Schema({
    name: {type: String, required: [true, "Provide Name of platform"]},
    url: {type: String},
    amount: {type: Number, required: [true, "Provide amount to be charged"]},
    activationDate: {type: Date, required: [true, "Provide Password"]},
    dueDate: {type: Date, required: [true, "Provide proposed day of reminder"]}
}, {timestamps: true})

export default mongoose.model<Subscription>("Subscription", subscriptionSchema);
