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

function validateEmail(mail) 
{
 if (/^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/.test(mail))
  {
    return (true)
  }
    return (false)
}


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

function ValidateEmail(email) 
{
    if (/^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/.test(myForm.emailAddr.value))
    {
    return (true)
    }
    return (false)
}

    if (inputNombre.value.length < 2) {
        errorNombre.innerHTML = "El nombre debe tener al menos 2 caracteres"
        inputNombre.focus()
        hasErrors = true
    }

    if (inputApellido.value.length < 2) {
        errorApellido.innerHTML = "El apellido debe tener al menos 2 caracteres"
        if(!hasErrors){
        inputApellido.focus()
        }

        hasErrors = true
    }


    if (!validateEmail(inputEmail.value)) {
        errorEmail.innerHTML = "Ingrese un email valido"
        if(!hasErrors){
            inputEmail.focus()
        }

        hasErrors = true
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
            errorImagen.innerHTML = "Por favor ingrese una imágen válida"
            
            if (!hasErrors) {
                inputImagen.focus()
            }
                                                                  
            hasErrors = true
        }
    }

    if (inputPassword.value.length < 8) {
        errorPassword.innerHTML = "La contraseña debe tener al menos 8 caracteres"
        if(!hasErrors){
        inputPassword.focus()
        }
        hasErrors = true
    }

    if (inputPassword2.value.length < 8) {
        errorPassword2.innerHTML = "Debe repetir su contraseña"
        if(!hasErrors){
        inputPassword2.focus()
        }
        hasErrors = true
    }

    if (hasErrors) {
        e.preventDefault()
    }
    
}

form.addEventListener('submit', validateForm)