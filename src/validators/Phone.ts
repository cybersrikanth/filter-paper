import PhoneModel from "../models/Phone";
import Validation from "./Validator";

export default class Phone extends Validation implements PhoneModel {
    constructor(number: number) {
        super(number)
    }

}