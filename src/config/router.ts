import {Application} from "express"
import auth from "../routes/auth"
import subscriptions from "../routes/subscriptions"
import user from "../routes/user"
export default (app: Application) => {
    app.use("/api/v1/authentication", auth);
    app.use("/api/v1/subscriptions", subscriptions);
    app.use("/api/v1/user", user);
}