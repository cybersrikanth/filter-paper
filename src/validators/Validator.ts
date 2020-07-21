import Validation from "../models/validator";
import { errorResponse } from "../response/error";

export default class Validator implements Validation {
    constructor(private text: any) {}

    isLength(length: number): this {
        if (this.text.toString().length !== length) {
            throw errorResponse(
                `entered data does not match the given length ${length}`
            );
        }
        return this;
    }

    max(limit: number): this {
        if (this.text.toString().length > limit) {
            throw errorResponse(`enter the data less than ${limit + 1}`);
        }
        return this;
    }

    min(limit: number) {
        if (this.text.toString().length < limit) {
            throw errorResponse(`enter the data more than ${limit}`);
        }
        return this;
    }

    isNumber() {
        if (isNaN(this.text)) {
            throw errorResponse(`enter a valid number`);
        }
        return this;
    }

    isAlpha() {
        const pattern = /^[A-Za-z]+$/;
        if (!this.text.toString().match(pattern)) {
            throw errorResponse(`enter alphabets only`);
        }
        return this;
    }

    isEmpty() {
        if(this.text.toString().length === 0) {
            throw errorResponse(`this feild is empty`)
        }
        return this;
    }
}
