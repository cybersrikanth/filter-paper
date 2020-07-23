import Validation from "./Validator";
import PasswordModel from "../models/Password";
import { errorResponse } from "../response/error";

export default class Password extends Validation implements PasswordModel {
    constructor(password: String) {
        super(password);
    }

    isPassword(
        pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z\d@$.!%*#?&]/,
        message?: String
    ): any {
        if (!this.text.match(pattern)) {
            throw errorResponse(message || "Please enter a password at least 8 character and contain At least one uppercase, one lower case, one special character and one number");
        }
        return this;
    }
}
