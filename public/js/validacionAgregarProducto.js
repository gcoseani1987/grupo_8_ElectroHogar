const form = document.querySelector("#formulario-creacion")

const { isFileImage } = require('../helpers/file')

const inputNombre = document.querySelector('#inputNombre')
const inputDescripcion = document.querySelector('#inputDescripcion')
const inputStock = document.querySelector('#inputStock')
const inputImagen = document.querySelector('#inputImagen')
const inputCategoria = document.querySelector('#inputCategoria')
const inputAlto = document.querySelector('#inputAlto')
const inputAncho = document.querySelector('#inputAncho')
const inputColor = document.querySelector('#inputColor')
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
const errorCategoria = document.querySelector('.errorCategoria')
const errorAlto = document.querySelector('.errorAlto')
const errorAncho = document.querySelector('.errorAncho')
const errorColor = document.querySelector('.errorColor')
const errorGarantia = document.querySelector('.errorGarantia')
const errorModelo = document.querySelector('.errorModelo')
const errorOrigen = document.querySelector('.errorOrigen')
const errorPeso = document.querySelector('.errorPeso') 
const errorProfundidad = document.querySelector('.errorProfundidad')
const errorPrecio = document.querySelector('.errorPrecio')

const inputArray = [
    inputNombre, inputDescripcion, inputStock, inputImagen, inputCategoria, inputAlto, inputAncho, inputColor, inputGarantia, inputModelo, inputOrigen, inputPeso, inputProfundidad, inputPrecio
] 

const errorArray = [
    errorNombre, errorDescripcion, errorStock, errorImagen, errorCategoria, errorAlto, errorAncho, errorColor, errorGarantia, errorModelo, errorOrigen, errorPeso, errorProfundidad, errorPrecio
] 


function esNumerico(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

function resetErrors() {
    errorArray.forEach(msg => {
        msg.innerHTML = ""
    })
}

function validateForm(e) {
    let hasErrors = false
    
    resetErrors()

    if (inputNombre.value.length < 5) {
        hasErrors = true
        inputNombre.innerHTML = "El nombre debe tener al menos 5 caracteres"
        inputNombre.focus()
    }

    
    if (inputDescripcion.value.length < 20) {
        hasErrors = true
        errorDescripcion.innerHTML = "La descripcion debe tener al menos 20 caracteres"
        inputDescripcion.focus()
    }

    if (!esNumerico(inputStock.value) || inputStock.value < 0) {
        errorStock.innerHTML = "El stock debe ser un número mayor a 0"
        
        if (!hasErrors) {
            inputStock.focus()
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
    
    const { file } = req
    if (!isFileImage(file.originalname)) {
        
        errorImagen.innerHTML = "Por favor ingrese una imágen válida"
        
        if (!hasErrors) {
            inputImagen.focus()
        }
                                                                                                
        hasErrors = true
    }

    if (!inputCategoria.value) {
        errorCategoria.innerHTML = "Por favor ingrese una categoria"
        
        if (!hasErrors) {
            inputCateogoria.focus()
        }

        hasErrors = true
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

    if (!inputColor.value) {
        errorColor.innerHTML = "Por favor ingrese un color"
        
        if (!hasErrors) {
            inputColor.focus()
        }

        hasErrors = true
    }

    if (!esNumerico(inputGarantia.value) || inputGarantia.value < 0) {
        errorGarantia.innerHTML = "La garantía debe ser un número mayor a 0"
        
        if (!hasErrors) {
            inputGarantia.focus()
        }
    }
    if (inputModelo.value.length < 4) {
        hasErrors = true
        errorModelo.innerHTML = "El modelo debe tener al menos 4 caracteres"
        inputModelo.focus()
    }

    if (inputOrigen.value.length < 4) {
        hasErrors = true
        errorOrigen.innerHTML = "El origen debe tener al menos 4 caracteres"
        inputOrigen.focus()
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

    if (hasErrors) {
        e.preventDefault()
    }
    
}

inputArray.forEach(input => {
    input.addEventListener('blur', validateForm)
})



form.addEventListener('submit', validateForm)


