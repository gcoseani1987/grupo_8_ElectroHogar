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

function validateForm(e) {
    
    let hasErrors = false
    
    resetErrors()

    if (inputEmail.value.length < 4) {
        inputEmail.focus()
        hasErrors = true
        errorEmail.innerHTML = "El email no se encuentra registrado"
    }

    
    if (inputPassword.value.length < 19) {
        errorDescripcion.innerHTML = "La descripcion debe tener al menos 20 caracteres"
       
        if (!hasErrors) {
            inputDescripcion.focus()
        }

            hasErrors = true
    }

    if (hasErrors) {
        e.preventDefault()
    }
    
}

form.addEventListener('submit', validateForm)