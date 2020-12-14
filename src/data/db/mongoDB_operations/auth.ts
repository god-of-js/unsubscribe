const User = require("../mongoose_models/user/user")
module.exports = {
    async saveUser(data: Object): Promise<Object> {
        const user = new User(data)
        return user.save().catch((err: Object) => {
            console.log(err);
            return err;
        });
    }
}