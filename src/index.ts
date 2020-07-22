import Email from "./validators/Email";

const email = new Email("Test@test.com");

try {
    const result = email.sanitize();
    console.log(result)
} catch (error) {
    console.log(error)
}
