import Validation from "../models/validator";
import { errorResponse } from "../response/error";

export default class Validator implements Validation {
    constructor(public text: any) {}

    isLength(length: number, message?: String): any {
        if (this.text.toString().length !== length) {
            throw errorResponse(
                message ||
                    `entered data does not match the given length ${length}`
            );
        }
        return this;
    }

    max(limit: number, message?: String): any {
        if (this.text.toString().length > limit) {
            throw errorResponse(
                message || `enter the data less than ${limit + 1}`
            );
        }
        return this;
    }

    min(limit: number, message?: String): any {
        if (this.text.toString().length < limit) {
            throw errorResponse(message || `enter the data more than ${limit}`);
        }
        return this;
    }

    isNumber(message?: String): any {
        if (isNaN(this.text)) {
            throw errorResponse(message || `enter a valid number`);
        }
        return this;
    }

    isAlpha(message?: String): any {
        const pattern = /^[A-Za-z]+$/;
        if (!this.text.toString().match(pattern)) {
            throw errorResponse(message || `enter alphabets only`);
        }
        return this;
    }

    isEmpty(message?: String): any {
        if (this.text.toString().length === 0) {
            throw errorResponse(message || `this feild is empty`);
        }
        return this;
    }
}
