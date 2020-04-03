exports.validateText = ({
    value, 
    name = 'Text field', 
    min = 4, 
    max = 256, 
    uriEncode=false
})=>{
    let Err = '';
    try {
        if(typeof value===Object) value = JSON.stringify(value)
        
        value = String(value).trim();
        if(value.length<min){
            Err = name+' should have minimum of '+min+' characters';
        }
        else if(value.length>max){
            Err = name+' can have maximum of '+max+' characters';
        }
        if(uriEncode) value = encodeURI(value);
        return{
            isValid : Err===''?true:false,
            data: value,
            err:Err
        }
    } catch (error) {
        return{
            isValid:false,
            data:value,
            err:error
        }
    }
  }