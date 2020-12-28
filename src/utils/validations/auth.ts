const Isemail = require("./isEmail");
const isEmail = require("./isEmail")
import {UserInterface} from "../typescript_interfaces/user";
import { ValidationsResponse } from "../typescript_interfaces/validations";
function validateUser(data: UserInterface): ValidationsResponse {
  let response: ValidationsResponse = {
    msg: "",
    status: false
  }
  console.log(Object.values(data))
  if(!isEmail(data.email)) {response.msg = "Wrong format of response"; response.status = true; return response};
  return response;
}
module.exports = {
    validateUser,
    // loginValidator
}