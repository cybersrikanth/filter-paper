"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Password_1 = __importDefault(require("./validators/Password"));
// module.exports = { Email }
try {
    const password = new Password_1.default("Devbro123!@#").isPassword();
    console.log(password);
}
catch (error) {
    console.log(error);
}
