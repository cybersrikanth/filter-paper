exports.validatePassword = (password)=>{
    try {
        if (password===undefined) password=''
        password = String(password)
        let passErr = '';
        if(password.length!==password.trim().length){
            passErr = 'password should not contain leading or tailing spaces'
        }
        else if(password.length<8 || password.length >64){
          passErr = 'password should contain atleast 8 char and not more than 64 char'
        }
        return{
            isValid: passErr==='' ? true:false,
            data: password,
            err:passErr
        }
    } catch (error) {
        return {
            isValid: false,
            data: password,
            err: error
        }
    }
}