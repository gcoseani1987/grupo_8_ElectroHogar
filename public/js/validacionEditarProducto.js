const form = document.querySelector("#formulario-edicion")
 
const inputNombre = document.querySelector('#inputNombre')
const inputDescripcion = document.querySelector('#inputDescripcion')
const inputStock = document.querySelector('#inputStock')
const inputImagen = document.querySelector('#inputImagen')
const inputAlto = document.querySelector('#inputAlto')
const inputAncho = document.querySelector('#inputAncho')
const inputGarantia = document.querySelector('#inputGarantia')
const inputModelo = document.querySelector('#inputModelo')
const inputOrigen = document.querySelector('#inputOrigen')
const inputPeso = document.querySelector('#inputPeso') 
const inputProfundidad = document.querySelector('#inputProfundidad')
const inputPrecio = document.querySelector('#inputPrecio')

const errorNombre = document.querySelector('.errorNombre')
const errorDescripcion = document.querySelector('.errorDescripcion')
const errorStock = document.querySelector('.errorStock')
const errorImagen = document.querySelector('.errorImagen')
const errorAlto = document.querySelector('.errorAlto')
const errorAncho = document.querySelector('.errorAncho')
const errorGarantia = document.querySelector('.errorGarantia')
const errorModelo = document.querySelector('.errorModelo')
const errorOrigen = document.querySelector('.errorOrigen')
const errorPeso = document.querySelector('.errorPeso') 
const errorProfundidad = document.querySelector('.errorProfundidad')
const errorPrecio = document.querySelector('.errorPrecio')

const inputArray = [
    inputNombre, inputDescripcion, inputStock, inputImagen, inputAlto, inputAncho, inputGarantia, inputModelo, inputOrigen, inputPeso, inputProfundidad, inputPrecio 
] 

const errorArray = [
    errorNombre, errorDescripcion, errorStock, errorImagen, errorAlto, errorAncho, errorGarantia, errorModelo, errorOrigen, errorPeso, errorProfundidad, errorPrecio
] 


function esNumerico(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

function resetErrors() {
    errorNombre.innerHTML = '', 
    errorDescripcion.innerHTML = '', 
    errorStock.innerHTML = '', 
    errorImagen.innerHTML = '' 
    errorAlto.innerHTML = '', 
    errorAncho.innerHTML = '',
    errorGarantia.innerHTML = '', 
    errorModelo.innerHTML = '', 
    errorOrigen.innerHTML = '', 
    errorPeso.innerHTML = '', 
    errorProfundidad.innerHTML = '', 
    errorPrecio.innerHTML = ''
}

function validateForm(e) {
    
    let hasErrors = false


    
    resetErrors()

    if (inputNombre.value.length < 4) {
        inputNombre.focus()
        hasErrors = true
        errorNombre.innerHTML = "El nombre debe tener al menos 5 caracteres"
    }

    
    if (inputDescripcion.value.length < 19) {
        errorDescripcion.innerHTML = "La descripcion debe tener al menos 20 caracteres"
       
        if (!hasErrors) {
            inputDescripcion.focus()
        }

            hasErrors = true
    }

    if (!esNumerico(inputStock.value) || inputStock.value < 0) {
        errorStock.innerHTML = "El stock debe ser un número mayor a 0"
        
        if (!hasErrors) {
            inputStock.focus()
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

    if (!esNumerico(inputAlto.value) || inputAlto.value < 0) {
        errorAlto.innerHTML = "El alto debe ser un número mayor a 0"
        
        if (!hasErrors) {
            inputAlto.focus()
        }

        hasErrors = true
    }

    if (!esNumerico(inputAncho.value) || inputAncho.value < 0) {
        errorAncho.innerHTML = "El ancho debe ser un número mayor a 0"
        
        if (!hasErrors) {
            inputAncho.focus()
        }

        hasErrors = true
    }

    if (!esNumerico(inputGarantia.value) || inputGarantia.value < 0) {
        errorGarantia.innerHTML = "La garantía debe ser un número mayor a 0"
        
        if (!hasErrors) {
            inputGarantia.focus()
        }

        hasErrors = true
    }

    if (inputModelo.value.length < 4) {
        errorModelo.innerHTML = "El modelo debe tener al menos 4 caracteres"
        if (!hasErrors) {
        inputModelo.focus()
        }

        hasErrors = true
    }

    if (inputOrigen.value.length < 4) {
        errorOrigen.innerHTML = "El origen debe tener al menos 4 caracteres"
        if (!hasErrors) {
        inputOrigen.focus()
        }

        hasErrors = true
    }

    if (!esNumerico(inputPeso.value) || inputPeso.value < 0) {
        errorPeso.innerHTML = "El peso debe ser un número mayor a 0"
        
        if (!hasErrors) {
            inputPeso.focus()
        }

        hasErrors = true
    }

    if (!esNumerico(inputProfundidad.value) || inputProfundidad.value < 0) {
        errorProfundidad.innerHTML = "La profundidad debe ser un número mayor a 0"
        
        if (!hasErrors) {
            inputProfundidad.focus()
        }

        hasErrors = true
    }

    if (!esNumerico(inputPrecio.value) || inputPrecio.value < 0) {
        errorPrecio.innerHTML = "El precio debe ser un número mayor a 0"
        
        if (!hasErrors) {
            inputPrecio.focus()
        } 

        hasErrors = true
    }

    console.log(hasErrors)

    if (hasErrors) {
        e.preventDefault()
    }   
}

form.addEventListener('submit', validateForm)