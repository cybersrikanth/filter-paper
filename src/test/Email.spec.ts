import { expect } from "chai";
import Email from "../validators/Email";

describe("@class Email", () => {
    describe("@method isEmail", () => {
        it("[SUCCESS] payload should be a valid email", () => {
            const payload = "test@test.com";
            const email = new Email(payload).isEmpty().isEmail();
            expect(email).to.not.have.property("success");
            expect(email).to.not.have.property("error");
        });

        it("[SUCCESS] payload should be sanitized", () => {
            const payload = " Test@TEST.Com ";
            const email = new Email(payload).sanitize();
            expect(email.email).equal("test@test.com");
            expect(email).to.not.have.property("success");
            expect(email).to.not.have.property("error");
        });

        it("[FAIL] payload should be a fail with invalid email", () => {
            const payload = "test@test.com";
            try {
                new Email(payload).isEmpty().isEmail();
            } catch (error) {
                expect(error).to.have.property("success");
                expect(error).to.have.property("error");
            }
        });
    });
});
