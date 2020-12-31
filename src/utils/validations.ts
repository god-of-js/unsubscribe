import {UserInterface, ValidationResponse} from "../@types/models";
class Validations {
    static response: ValidationResponse = {
        error: true,
        message: ""
    }
    static async userVerification(data: UserInterface) {
        let emailAndPassword = this.emailAndPassword(data);
        if(emailAndPassword.error) return emailAndPassword;
        if(!data.phoneNumber) this.response.message = "Phone number was not provided";
        if(!data.fullName) this.response.message = "Name was not provided";
        if(this.response.message === "") this.response.error = true;
        return this.response;
    }
    static emailAndPassword(data: UserInterface): ValidationResponse {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(!re.test(String(data.email).toLowerCase())) this.response.message = "Incorrect format of email";
        if(!data.password) this.response.message = "Password unavailable";
        if(this.response.message === "") this.response.error = false;
        return this.response;
    }
    
    
}

export default Validations;