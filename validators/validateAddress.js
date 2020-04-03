const {validateString} = require('./validateString')
const {validateNumberLength} = require('./validateNumberLength')
exports.validateAddress = (address) =>{
    let addErr = {}
    try {
        if(typeof address !== Object) address = JSON.parse(address)
        if(!address.city || !address.street || !address.pin){
            return {
                isValid:false,
                data:address,
                err:'city, street and pin are required'
            }
        }
            const streetErr = validateString({
                value:address.street,
                name:'street',
                pattern:'alphaNumericWithComma',
                min:5,
                max:35
            })
            const cityErr = validateString({
                value:address.city,
                name:'city',
                pattern:'alphaWithSpace',
                min:2,
                max:20
            })
            const pinErr = validateNumberLength({
                value:address.pin,
                name:'pin',
                min:6,
                max:6
            })
            if(streetErr.isValid && cityErr.isValid && pinErr.isValid){
                return{
                    isValid: true,
                    data:address,
                    err:addErr
                }
            }
            else{
                if(!streetErr.isValid) addErr.street = streetErr.err
                if(!cityErr.isValid) addErr.city = cityErr.err
                if(!pinErr.isValid) addErr.pin = pinErr.err
                return{
                    isValid:false,
                    data:address,
                    err:addErr
                }
            }
        } catch (error) {
            return{
                isValid:false,
                data:address,
                err:'invalid format'
            }
        }
  }