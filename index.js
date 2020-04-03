const {validateEmail} = require('./validators/validateEmail')
const {validateString} = require('./validators/validateString')
const {validateText} = require('./validators/validateText')
const {validateNumberLength} = require('./validators/validateNumberLength')
const {validateBool} = require('./validators/validateBool')
const {validateAddress} = require('./validators/validateAddress')
const {validatePassword} = require('./validators/validatePassword')
const {filter} = require('./filter')

exports.validateEmail = validateEmail;
exports.validateString = validateString;
exports.validatePassword = validatePassword;
exports.validateText = validateText;
exports.validateNumberLength = validateNumberLength;
exports.validateBool = validateBool;
exports.validateAddress = validateAddress;
exports.filter = filter
