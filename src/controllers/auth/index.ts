const {validateUser} = require('../../utils/validations/auth')
const AuthDb = require("../../data/db/mongoDB_operations/auth")
module.exports.createAccount = async function (req: {body: []}, res: {}): Promise<void>{
    console.log(req.body);
    validateUser(...req.body);
    AuthDb.saveUser({...req.body});
}