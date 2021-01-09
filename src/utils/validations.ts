import {UserInterface, ValidationResponse, Subscription } from "../@types/models";

/**
 * @description This class contains all validations. response is the return object. in the controllers, we check if the 
 * error field is equal to true. if it is we handle it if not we continue with our program.
 */
class Validations {
    static response: ValidationResponse = {
        error: true,
        message: ""
    }
    static clearResponse() {
        this.response.error = true;
        this.response.message = ""
    }
    static async userVerification(data: UserInterface) {
        this.clearResponse();
        let emailAndPassword = this.emailAndPassword(data);
        if(emailAndPassword.error) return emailAndPassword;
        if(!data.phone) this.response.message = "Phone number was not provided";
        if(!data.name) this.response.message = "Name was not provided";
        if(this.response.message === "") this.response.error = false;
        return this.response;
    }
    static emailAndPassword(data: UserInterface): ValidationResponse {
        this.clearResponse();
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(!re.test(String(data.email).toLowerCase())) this.response.message = "Incorrect format of email";
        if(!data.password) this.response.message = "Password was not provided";
        if(this.response.message === "") this.response.error = false;
        return this.response;
    }
    static subscriptionValidation(data: Subscription): ValidationResponse {
        this.clearResponse();
        if(!data.name) this.response.message = "Provide name of platform";
        if(!data.amount) this.response.message = "Provide amount to be charged by platform";
        if(!data.activationDate) this.response.message = "Provide the date the subscription was activated";
        if(!data.dueDate) this.response.message = "Provide due date of subscription";
        if(!data.subscriber) this.response.message = "Provide subscriber's Id";
        if(this.response.message === "") this.response.error = false;
        return this.response;
    }
}

export default Validations;