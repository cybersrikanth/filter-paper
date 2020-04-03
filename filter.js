exports.filter=(obj)=>{
    try {
        const arr = Object.keys(obj)
        const result = {isValid:true, err:{}, data:{}}
        for(let i=0; i<arr.length; i++){
            if(!obj[arr[i]].isValid){
                result.isValid = false;
                result.err[arr[i]] = obj[arr[i]].err;
            }
            result.data[arr[i]] = obj[arr[i]].data;
        }
        return result;
    } catch (error) {
        return {isValid:false, err:'invalid input format'}
    }
}