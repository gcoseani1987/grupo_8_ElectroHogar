const form = document.querySelector("#formulario-login")

const inputEmail = document.querySelector('#inputEmail')
const inputPassword = document.querySelector('#inputPassword')

const errorEmail = document.querySelector('.errorEmail')
const errorPassword = document.querySelector('.errorPassword')


const inputArray = [
    inputEmail, inputPassword
] 

const errorArray = [
    errorEmail, errorPassword
] 

function resetErrors() {
    errorEmail.innerHTML = '', 
    errorPassword.innerHTML = ''
}

function validateEmail(mail) 
{
 if (/^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/.test(mail))
  {
    return (true)
  }
    return (false)
}

function validateForm(e) {
    
    let hasErrors = false
    
    resetErrors()

    if (!validateEmail(inputEmail.value)) {
        console.log(!validateEmail(inputEmail.value))
        errorEmail.innerHTML = "Ingrese un email valido"
        if(!hasErrors){
        inputEmail.focus()
        }
        hasErrors = true
    }

    if (inputPassword.value.length < 8) {
        errorPassword.innerHTML = "La contraseña debe tener al menos 8 caracteres"
        if(!hasErrors){
        inputPassword.focus()
        }
        hasErrors = true
    }

    if (hasErrors) {
        e.preventDefault()
    }
    
}

form.addEventListener('submit', validateForm)