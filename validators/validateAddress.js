
exports.validateAddress = (address) =>{
    let addErr = {}
    try {
        if(typeof address !== Object) address = JSON.parse(address)
            const streetErr = this.validateName(address.street,'street', 'alphaNumericWithComma',5, 35);
            const cityErr = this.validateName(address.city,'city','alphaWithSpace',2,20);
            const pinErr = this.validateName(address.pin,'pin', 'numeric',6,6);
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
                err:'invalid address format'
            }
        }
  }