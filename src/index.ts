import Validator from "./validators/Validator";

try {
    const user = new Validator(123);
    user.isLength(4).isEmpty();    
} catch (error) {
    console.log(error);
}

