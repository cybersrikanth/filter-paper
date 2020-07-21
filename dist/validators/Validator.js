"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const error_1 = require("../response/error");
class Validator {
    constructor(text) {
        this.text = text;
    }
    isLength(length) {
        if (this.text.toString().length !== length) {
            throw error_1.errorResponse(`entered data does not match the given length ${length}`);
        }
        return this;
    }
    max(limit) {
        if (this.text.toString().length > limit) {
            throw error_1.errorResponse(`enter the data less than ${limit + 1}`);
        }
        return this;
    }
    min(limit) {
        if (this.text.toString().length < limit) {
            throw error_1.errorResponse(`enter the data more than ${limit}`);
        }
        return this;
    }
    isNumber() {
        if (isNaN(this.text)) {
            throw error_1.errorResponse(`enter a valid number`);
        }
        return this;
    }
    isAlpha() {
        const pattern = /^[A-Za-z]+$/;
        if (!this.text.toString().match(pattern)) {
            throw error_1.errorResponse(`enter alphabets only`);
        }
        return this;
    }
    isEmpty() {
        if (this.text.toString().length === 0) {
            throw error_1.errorResponse(`this feild is empty`);
        }
        return this;
    }
}
exports.default = Validator;
