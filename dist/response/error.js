"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorResponse = (message, success = false) => {
    return {
        success,
        error: message
    };
};
