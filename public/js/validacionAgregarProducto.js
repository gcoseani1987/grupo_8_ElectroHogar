const { isFileImage } = require('../helpers/file')

    let inputNombre = document.querySelector('#inputNombre')
    let inputDescripcion = document.querySelector('#inputDescripcion')
    let inputStock = document.querySelector('#inputStock')
    let inputImagen = document.querySelector('#inputImagen')
    let inputCategoria = document.querySelector('#inputCategoria')
    let inputAlto = document.querySelector('#inputAlto')
    let inputAncho = document.querySelector('#inputAncho')
    let inputColor = document.querySelector('#inputColor')
    let inputGarantia = document.querySelector('#inputGarantia')
    let inputModelo = document.querySelector('#inputModelo')
    let inputOrigen = document.querySelector('#inputOrigen')
    let inputPeso = document.querySelector('#inputPeso') 
    let inputProfundidad = document.querySelector('#inputProfundidad')
    let inputPrecio = document.querySelector('#inputPrecio')

    let errorNombre = document.querySelector('.errorNombre')
    let errorDescripcion = document.querySelector('.errorDescripcion')
    let errorStock = document.querySelector('.errorStock')
    let errorImagen = document.querySelector('.errorImagen')
    let errorCategoria = document.querySelector('.errorCategoria')
    let errorAlto = document.querySelector('.errorAlto')
    let errorAncho = document.querySelector('.errorAncho')
    let errorColor = document.querySelector('.errorColor')
    let errorGarantia = document.querySelector('.errorGarantia')
    let errorModelo = document.querySelector('.errorModelo')
    let errorOrigen = document.querySelector('.errorOrigen')
    let errorPeso = document.querySelector('.errorPeso') 
    let errorProfundidad = document.querySelector('.errorProfundidad')
    let errorPrecio = document.querySelector('.errorPrecio')

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

    }
