// import Validator from "../validators/Validator";
// import { expect } from "chai";

// describe("@class Validation", () => {
//     describe("@method isLength ", () => {
//         it("[SUCCESS] given length should be equal to length of the payload", () => {
//             const payload = "test";
//             const validator = new Validator(payload).isLength(4);
//             expect(validator).to.not.have.property("success");
//             expect(validator).to.not.have.property("error");
//         });

//         it("[FAIL] given length should be not be equal to length of the payload", () => {
//             const payload = "test";
//             try {
//                 new Validator(payload).isLength(3);
//             } catch (error) {
//                 expect(error).to.have.property("success");
//                 expect(error).to.have.property("error");
//             }
//         });
//     });

//     describe("@method max", () => {
//         it("[SUCCESS] payload size must me lesser than the given length", () => {
//             const payload = "test";
//             const validator = new Validator(payload).max(5);
//             expect(validator).to.not.have.property("success");
//             expect(validator).to.not.have.property("error");
//         });

//         it("[SUCCESS] number is passed as payload and length is checked", () => {
//             const payload = 1234;
//             const validator = new Validator(payload).max(10);
//             expect(validator).to.not.have.property("success");
//             expect(validator).to.not.have.property("error");
//         });

//         it("[FAIL] payload size must me greater than the given length", () => {
//             const payload = "test";
//             try {
//                 new Validator(payload).max(3);
//             } catch (error) {
//                 expect(error).to.have.property("success");
//                 expect(error).to.have.property("error");
//             }
//         });
//     });

//     describe("@method min", () => {
//         it("[SUCCESS] payload size must me greater than the given length", () => {
//             const payload = "test";
//             const validator = new Validator(payload).min(3);
//             expect(validator).to.not.have.property("success");
//             expect(validator).to.not.have.property("error");
//         });

//         it("[SUCCESS] number is passed as payload and length is checked", () => {
//             const payload = 1234;
//             const validator = new Validator(payload).min(2);
//             expect(validator).to.not.have.property("success");
//             expect(validator).to.not.have.property("error");
//         });

//         it("[FAIL] payload size must me less than the given length", () => {
//             const payload = "test";
//             try {
//                 new Validator(payload).min(5);
//             } catch (error) {
//                 expect(error).to.have.property("success");
//                 expect(error).to.have.property("error");
//             }
//         });
//     });

//     describe("@method isNumber ", () => {
//         it("[SUCCESS] given payload should be a number", () => {
//             const payload = 1234;
//             const validator = new Validator(payload).isNumber();
//             expect(validator).to.not.have.property("success");
//             expect(validator).to.not.have.property("error");
//         });

//         it("[FAIL] given payload should not be a number", () => {
//             const payload = "test";
//             try {
//                 new Validator(payload).isNumber();
//             } catch (error) {
//                 expect(error).to.have.property("success");
//                 expect(error).to.have.property("error");
//             }
//         });
//     });

//     describe("@method isAlpha ", () => {
//         it("[SUCCESS] given payload should be a alphabet", () => {
//             const payload = "test";
//             const validator = new Validator(payload).isAlpha();
//             expect(validator).to.not.have.property("success");
//             expect(validator).to.not.have.property("error");
//         });

//         it("[FAIL] given payload should not be a alphabet", () => {
//             const payload = 1234;
//             try {
//                 new Validator(payload).isAlpha();
//             } catch (error) {
//                 expect(error).to.have.property("success");
//                 expect(error).to.have.property("error");
//             }
//         });
//     });

//     describe("@method isAlpha ", () => {
//         it("[SUCCESS] given payload should not be empty", () => {
//             const payload = "test";
//             const validator = new Validator(payload).isEmpty();
//             expect(validator).to.not.have.property("success");
//             expect(validator).to.not.have.property("error");
//         });

//         it("[FAIL] given payload should be empty", () => {
//             const payload = "";
//             try {
//                 new Validator(payload).isEmpty();
//             } catch (error) {
//                 expect(error).to.have.property("success");
//                 expect(error).to.have.property("error");
//             }
//         });
//     });
// });
