import {Application} from "express"
import auth from "../routes/auth"
export default (app: Application) => {
    app.use("/api/v1/authentication", auth);
}