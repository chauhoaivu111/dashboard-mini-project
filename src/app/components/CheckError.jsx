
 export const CheckError = (dataenter,FormError) => {

    let newFormErrors = {}

// dataenter.username.length < 8 && 
    if(  !validEmail(dataenter.username) && dataenter.username !=="") {

        newFormErrors.username = "invalid username"
        
    }

    if (dataenter.password.length < 6 && dataenter.password !== "") {
        newFormErrors.password = "at least 6 characters"
    }
        FormError(newFormErrors)


}


export const validEmail = (email) => {
    const CheckEmail= /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return CheckEmail.test(email)
}
