import Email from "./validators/Email";

const email = new Email("Test@test.com");

try {
    const result = email.isEmail().email;
    console.log(result)
} catch (error) {
    console.log(error)
}
