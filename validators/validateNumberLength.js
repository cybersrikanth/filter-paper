exports.validateNumberLength = ({
    value,
    name = 'phone number',
    min = 10,
    max = 10
}) => {
    try {
        if(!value) throw TypeError
        value = String(value).trim();
        const pattern = /^[0-9]*$/;
        let valueErr = '';
        if (!pattern.test(value)) {
          valueErr = 'Please enter a valid '+name;
        } else if (value.length < min ) {
          valueErr = name+ ' should contains minimum '+min+' number';
        }else if(value.length>max){
            valueErr = name+ ' can contains maximum '+max+' number';
        }
        return {
          isValid: valueErr === '' ? true : false,
          data:value,
          err: valueErr
        };
    } catch (error) {
        return {
            isValid: false,
            data: value,
            err : error
        }
    }
  };