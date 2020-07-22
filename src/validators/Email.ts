import Validator from "./Validator";
import EmailModel from "../models/Email";
import { errorResponse } from "../response/error";

export default class Email extends Validator implements EmailModel {
    constructor(public text: any) {
        super(text.toLowerCase().trim());
    }

    isEmail(
        pattern = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/,
        message?: String
    ): any {
        if (!this.text.match(pattern)) {
            throw errorResponse(message || "Enter a valid Email");
        }
        return this;
    }

    get email() {
        return this.text;
    }
}
