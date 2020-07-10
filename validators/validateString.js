exports.validateString = ({
    value = '',
    name = 'Name',
    pattern = 'alpha',
    min = 3,
    max = 40,
    custom = false // {pattern: "/^[0-9]*$/", type: "numbers"}
}
  ) => {
      try {  
          if(value == undefined || value == null) throw TypeError
          value = String(value).trim()
        const numeric = /^[0-9]*$/;
        const alpha = /^[a-zA-Z]*$/;
        const alphaNumeric = /^([a-zA-Z0-9]+)$/;
        const alphaNumericWithUnder = /^([a-zA-Z0-9 _-]+)$/;
        const alphaWithSpace = /^[a-zA-Z ]*$/;
        const alphaNumericWithComma = /^([a-zA-Z0-9 /,.]+)$/;
        const alphaNumericWithAll = /^([a-zA-Z0-9 ,._\-()&|#@!\*{}]+)$/;
        let err = '';
        if(custom){
            pattern = custom.pattern;
            err = custom.type

        }else if (pattern === 'numeric') {
          pattern = numeric;
          err = 'numbers';
        } else if (pattern === 'alphaNumeric') {
          pattern = alphaNumeric;
          err = 'alphabets and numbers';
        } else if (pattern === 'alphaNumericWithComma') {
          pattern = alphaNumericWithComma;
          err = 'alphabers, numbers, space, comma, forward slash and period';
        } else if (pattern === 'alphaNumericWithUnder') {
          pattern = alphaNumericWithUnder;
          err = 'alphabets, numbers, underscore, and white space';
        } else if (pattern === 'alphaWithSpace') {
          pattern = alphaWithSpace;
          err = 'alphabets and whitespace';
        } else if (pattern === 'alphaNumericWithAll') {
          pattern = alphaNumericWithAll;
          err = 'alphabets, numbers, underscore, special symbols, and white space ';
        } else {
          pattern = alpha;
          err = 'alphabets';
        }
        let valueErr = '';
        if (value.length === 0) {
          valueErr = 'Please enter the ' + name;
        } else if (min === max && value.length !== min) {
          valueErr = name + ' should contain exactly ' + min + ' characters';
        } else if (value.length < min) {
          valueErr = name + ' should contain atleast ' + min + ' characters';
        } else if (value.length > max) {
          valueErr = name + ' can only contain upto ' + max + ' characters';
        } else if (!pattern.test(value)) {
          valueErr = name + ' can contain only ' + err;
        }
        return {
          isValid: valueErr === '' ? true : false,
          data:value,
          err: valueErr
        };
      } catch (error) {
          return {
              isValid: false,
              data : value,
              err: error
          }
      }
  };
