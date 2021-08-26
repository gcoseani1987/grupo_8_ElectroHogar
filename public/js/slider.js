window.addEventListener('load',()=>{
    const imagenes = document.querySelectorAll('.imagenes-producto')
    const flechaIzq = document.querySelector('.arrow-left');
    const flechaDer = document.querySelector('.arrow-right');
    const marcadores = document.querySelectorAll('.dots')

    
    let i = 0
    imagenes[i].classList.add('mostrar')
    marcadores[i].classList.add('active')  

    
    function reset(){
        marcadores.forEach(el => el.classList.remove("active"))
        imagenes.forEach(el => el.classList.remove("mostrar"))
    }
    

    flechaDer.addEventListener('click',()=>{
        reset()
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
        reset()
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


    for (let i = 0; i < marcadores.length; i++) {
        marcadores[i].addEventListener("click", function() {
            reset()
            marcadores[i].classList.add('active')
            imagenes[i].classList.add('mostrar')
        });
    }

})