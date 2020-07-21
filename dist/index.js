"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Validator_1 = __importDefault(require("./validators/Validator"));
try {
    const user = new Validator_1.default(123);
    user.isLength(4).isEmpty();
}
catch (error) {
    console.log(error);
}
