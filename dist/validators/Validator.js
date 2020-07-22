"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const error_1 = require("../response/error");
class Validator {
    constructor(text) {
        this.text = text;
    }
    isLength(length, message) {
        if (this.text.toString().length !== length) {
            throw error_1.errorResponse(message ||
                `entered data does not match the given length ${length}`);
        }
        return this;
    }
    max(limit, message) {
        if (this.text.toString().length > limit) {
            throw error_1.errorResponse(message || `enter the data less than ${limit + 1}`);
        }
        return this;
    }
    min(limit, message) {
        if (this.text.toString().length < limit) {
            throw error_1.errorResponse(message || `enter the data more than ${limit}`);
        }
        return this;
    }
    isNumber(message) {
        if (isNaN(this.text)) {
            throw error_1.errorResponse(message || `enter a valid number`);
        }
        return this;
    }
    isAlpha(message) {
        const pattern = /^[A-Za-z]+$/;
        if (!this.text.toString().match(pattern)) {
            throw error_1.errorResponse(message || `enter alphabets only`);
        }
        return this;
    }
    isEmpty(message) {
        if (this.text.toString().length === 0) {
            throw error_1.errorResponse(message || `this feild is empty`);
        }
        return this;
    }
}
exports.default = Validator;
