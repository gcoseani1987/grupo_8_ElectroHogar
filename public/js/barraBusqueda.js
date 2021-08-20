window.addEventListener ('load', function(){
    let busqueda = document.querySelector('.barra-busqueda');
    busqueda.addEventListener('focus',()=>{
        busqueda.style.backgroundColor = 'white';
    });
    busqueda.addEventListener('blur',()=>{
        busqueda.style.backgroundColor = 'rgba(53, 53, 53,0.1)';
    });

})