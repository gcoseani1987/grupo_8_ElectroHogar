const form = document.querySelector("#formulario-registro")

const inputNombre = document.querySelector('#inputNombre')
const inputApellido = document.querySelector('#inputApellido')
const inputEmail = document.querySelector('#inputEmail')
const inputImagen = document.querySelector('#inputImagen')
const inputPassword = document.querySelector('#inputPassword')
const inputPassword2 = document.querySelector('#inputPassword2')

const errorNombre = document.querySelector('.errorNombre')
const errorApellido = document.querySelector('.errorApellido')
const errorEmail = document.querySelector('.errorEmail')
const errorImagen = document.querySelector('.errorImagen')
const errorPassword = document.querySelector('.errorPassword')
const errorPassword2 = document.querySelector('.errorPassword2')

const inputArray = [
    inputNombre, inputApellido, inputEmail, inputImagen, inputPassword, inputPassword2
] 

const errorArray = [
    errorNombre, errorApellido, errorEmail, errorImagen, errorPassword, errorPassword2
] 

function resetErrors() {
    errorNombre.innerHTML = '', 
    errorApellido.innerHTML = '', 
    errorEmail.innerHTML = '', 
    errorImagen.innerHTML = '', 
    errorPassword.innerHTML = '',  
    errorPassword2.innerHTML = ''
}

function validateForm(e) {
    
    let hasErrors = false
    
    resetErrors()

    if (inputNombre.value.length < 2) {
        inputNombre.focus()
        hasErrors = true
        errorNombre.innerHTML = "El nombre debe tener al menos 2 caracteres"
    }

    if (inputApellido.value.length < 2) {
        inputApellido.focus()
        hasErrors = true
        errorApellido.innerHTML = "El apellido debe tener al menos 2 caracteres"
    }

    //email-> ver como se hace
    if (inputApellido.value.length < 2) {
        inputApellido.focus()
        hasErrors = true
        errorApellido.innerHTML = "El apellido debe tener al menos 2 caracteres"
    }

    if (!inputImagen.value) {
        errorImagen.innerHTML = "Por favor ingrese una imágen"
        
        if (!hasErrors) {
            inputImagen.focus()
        }
                                                                                                
        hasErrors = true
    }       
    
    if(inputImagen.value){
        if (!isFileImage(inputImagen.value)) {  
            console.log(!isFileImage(inputImagen.value))
            errorImagen.innerHTML = "Por favor ingrese una imágen válida"
            
            if (!hasErrors) {
                inputImagen.focus()
            }
                                                                  
            hasErrors = true
        }
    }

    if (inputPassword.value.length < 8) {
        inputPassword.focus()
        hasErrors = true
        errorPassword.innerHTML = "La contraseña debe tener al menos 8 caracteres"
    }

    // Password2 -> ver como se hace
    if (inputApellido.value.length < 2) {
        inputApellido.focus()
        hasErrors = true
        errorApellido.innerHTML = "El apellido debe tener al menos 2 caracteres"
    }    

    if (hasErrors) {
        e.preventDefault()
    }
    
}

form.addEventListener('submit', validateForm)