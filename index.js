const {validateEmail} = require('./validators/validateEmail')
const {validateString} = require('./validators/validateString')
const {validateText} = require('./validators/validateText')
const {validateNumberLength} = require('./validators/validateNumberLength')
const {validateBool} = require('./validators/validateBool')
const {validateAddress} = require('./validators/validateAddress')
const {filter} = require('./filter')

exports = {
    validateEmail, validateString,validateText, validateNumberLength, validateBool, validateAddress, filter
}