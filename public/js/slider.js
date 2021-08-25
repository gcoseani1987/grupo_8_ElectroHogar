window.addEventListener('load',()=>{
    const imagenes = document.querySelectorAll('.imagenes-producto')
    const flechaIzq = document.querySelector('.arrow-left');
    const flechaDer = document.querySelector('.arrow-right');
    const marcadores = document.querySelectorAll('.dots')

    
    let i = 0
    imagenes[i].classList.add('mostrar')
    marcadores[i].classList.add('active')  
    

    flechaDer.addEventListener('click',()=>{
        imagenes[i].classList.remove('mostrar')
        marcadores[i].classList.remove('active')
        if(i<(imagenes.length-1)){
            i = i + 1
            imagenes[i].classList.add('mostrar')
            marcadores[i].classList.add('active')
            
        }else{
            i = 0
            imagenes[i].classList.add('mostrar')
            marcadores[i].classList.add('active')
        }    
    }
    )

    flechaIzq.addEventListener('click',()=>{
        imagenes[i].classList.remove('mostrar')
        marcadores[i].classList.remove('active')
        if(i != 0){
            i = i - 1 
            imagenes[i].classList.add('mostrar')
            marcadores[i].classList.add('active')
            
        }else {
            i = (imagenes.length-1)
            imagenes[i].classList.add('mostrar')
            marcadores[i].classList.add('active')
        }    
    })  
})