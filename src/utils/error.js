exports.errorHandler = (params) => {
    const code= params.code || 500
    let message= params.messge || "error"
    
    if (params.err) {
        if (typeof params.err == 'string') {
             message=params.err
        }
    }

   console.error(params)
   alert(message)
    return params//generic message
}