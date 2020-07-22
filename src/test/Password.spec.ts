import { expect } from "chai";
import Password from "../validators/Password";

describe("@class Password", () => {
    describe("@method isPassword", () => {
        it("[SUCCESS] payload with a valid password", () => {
            const payload = "Test@123!@#";
            const password = new Password(payload).isPassword();
            expect(password).to.not.have.property("success");
            expect(password).to.not.have.property("error");
        });

        it("[FAIL] payload without a uppercase", () => {
            const payload = "test@123!@#";
            try {
                new Password(payload).isPassword();
            } catch (error) {
                expect(error).to.have.property("success");
                expect(error).to.have.property("error");
            }
        });
        it("[FAIL] payload without a lowercase", () => {
            const payload = "TEST@123!@#";
            try {
                new Password(payload).isPassword();
            } catch (error) {
                expect(error).to.have.property("success");
                expect(error).to.have.property("error");
            }
        });

        it("[FAIL] payload without a special character", () => {
            const payload = "testtest123";
            try {
                new Password(payload).isPassword();
            } catch (error) {
                expect(error).to.have.property("success");
                expect(error).to.have.property("error");
            }
        });

        it("[FAIL] payload without a number", () => {
            const payload = "test@!@#!@#";
            try {
                new Password(payload).isPassword();
            } catch (error) {
                expect(error).to.have.property("success");
                expect(error).to.have.property("error");
            }
        });

        it("[FAIL] payload minimum of 8 characters", () => {
            const payload = "test";
            try {
                new Password(payload).isPassword();
            } catch (error) {
                expect(error).to.have.property("success");
                expect(error).to.have.property("error");
            }
        });
    });
});
