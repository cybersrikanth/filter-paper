exports.validateEmail = ({
    email,normalize=true
}) => {
    try {
        if(email==undefined) email=''
      const pattern = /^[a-z0-9]+[\w.]+[a-z0-9]+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
      let emailErr = '';
      email = String(email).trim()
      if (email.length === 0) {
        emailErr = 'Please Enter eMail id';
      } else if (!pattern.test(email)) {
        emailErr = 'Please enter valid email id';
      }
      const data =(normalize)? email.toLowerCase(): email;
      return {
        isValid: emailErr === '' ? true : false,
        data, 
        err: emailErr
      };
        
    } catch (error) {
        return {
            isValid: false,
            data,
            err: emailErr
        }
    }
};