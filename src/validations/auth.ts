const {boolean, assert, optional, object, date, any, number, string, array, struct, length } = require( 'superstruct');
const isEmail = require( 'is-email');
const Email = struct('Email', isEmail)
module.exports.createAccountValidator = object({
    name: length(string(), 2, 100),
    email: Email,
    phoneNumber: length(number(), 10, 20),
    password: length(string(), 5, 50),
})
module.exports.loginValidator = object({
    email: Email,
    password: length(string(), 6, 50),
})