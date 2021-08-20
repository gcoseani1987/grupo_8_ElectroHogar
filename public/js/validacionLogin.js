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

        e.preventDefault()
    
    let hasErrors = false
    
    resetErrors()
    
    fetch('http://localhost:3030/api/users/emailExist',{
        method : "POST",
        body : JSON.stringify({
            email : inputEmail.value
        }),
        headers : {
            "content-type" : "application/json"
        }
    }).then(res => res.json())
    .then(respuesta =>{
        if (!validateEmail(inputEmail.value)) {
            errorEmail.innerHTML = "Ingrese un email valido"
            if(!hasErrors){
            inputEmail.focus()
            }
            hasErrors = true
        }

        if (inputPassword.value.length < 8) {
            errorEmail.innerHTML = "Usuario no valido"
            if(!hasErrors){
            inputEmail.focus()
            }
            hasErrors = true
        }

        if(!respuesta.found){
            errorEmail.innerHTML = "Usuario no valido"
            hasErrors = true
        }
        
        if (!hasErrors) {
            form.submit()
        }

    })
    
    
}

form.addEventListener('submit', validateForm)