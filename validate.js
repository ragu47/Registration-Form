const form = document.querySelector("#form");
const username = document.querySelector("#username")
const email = document.querySelector("#email")
const password = document.querySelector("#password")
const confirmPassword = document.querySelector("#confirmpassword")

form.addEventListener('submit',(e)=>{
    
    const bool = validateInputs()
    if(!bool){
        e.preventDefault()
    }
    else{
        e.preventDefault()
        console.log("success")
        window.location.href = "http://127.0.0.1:5500/Validation/result.html"
    }
})

function validateInputs(){
    const usernameval = username.value.trim()
    const emailval = email.value.trim()
    const passwordval = password.value.trim() 
    const confirmPasswordval =  confirmPassword.value.trim()
    var result = true

    if(usernameval === ''){
        result = false
        setError(username,"username is required")
    }
    else{
        setSuccess(username)
    }
    
    if(emailval === ''){
        result = false
        setError(email,"email is required")
    }
    else if(validateEmail(emailval)){
        setSuccess(email)
    }
    else{
        result = false
        setError(email,"enter a valid email")
    }

    if(passwordval === ''){
        result = false
        setError(password,"password is required")
    }
    else if(passwordval.length<8){
        result = false
        setError(password,"password length must be more than 8 characters")
    }
    else{
        setSuccess(password)
    }

    if(confirmPasswordval === ''){
        result = false
        setError(confirmPassword,"password is required")
    }
    else if(confirmPasswordval === passwordval){
        setSuccess(confirmPassword)
    }
    else{
        result = false
        setError(confirmPassword,"password mismatch")
    }
    return result

}
function setError(element,message){
    const parentElem = element.parentElement;
    const errorElem = parentElem.querySelector(".error")
    errorElem.innerText = message
    parentElem.classList.add(".error")
    parentElem.classList.remove('success')
}

function setSuccess(element){
    const parentElem = element.parentElement;
    const errorElem = parentElem.querySelector(".error")
    errorElem.innerText = ''
    
    parentElem.classList.add(".success")
    parentElem.classList.remove('error')
}

function validateEmail(email_id) {
    const regex_pattern =      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    if (regex_pattern.test(email_id)) {
        return true;
    }
    else {
        return false;
    }
}
