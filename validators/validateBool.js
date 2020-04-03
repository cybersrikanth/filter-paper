exports.validateBool = ({value}) =>{
    try {
        if(!value) value = false;
        let boolErr = '';
        if(typeof value !== Boolean){
            if(String(value).toLowerCase().trim()==='true') value = true;
            else if(String(value).toLowerCase().trim()==='false') value = false;
            else boolErr = 'only true or false value is allowed'
        }
        return{
            isValid: boolErr===''?true:false,
            data: value,
            err:boolErr
        }       
    } catch (error) {
        return{
            isValid:false,
            data: value,
            err: boolErr
        }
    }
}