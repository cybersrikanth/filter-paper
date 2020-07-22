"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Email_1 = __importDefault(require("./validators/Email"));
const email = new Email_1.default("Test@test.com");
try {
    const result = email.isEmail().email;
    console.log(result);
}
catch (error) {
    console.log(error);
}
