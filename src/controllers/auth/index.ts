const {createAccountValidator} = require('../../validations/auth')
module.exports.createAccount = function (req: {body: []}, res: {}): void {
    console.log(req.body);
    createAccountValidator(...req.body)
}