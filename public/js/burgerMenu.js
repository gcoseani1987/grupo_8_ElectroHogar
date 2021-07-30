let burgerBtn = document.querySelector('.burger-menu')
let menuStyle = document.querySelector('div#menu-style')
let categoriasBtn = document.querySelector("#categorias-btn")
let mostrarCategorias = document.querySelector('.mostrar-categorias')
let arrow = document.querySelector('.burger-arrow')
let main = document.querySelector('main')


categoriasBtn.addEventListener('click',()=>{
    mostrarCategorias.classList.toggle('mostrar-categorias');
    arrow.classList.toggle('arrow-turn')
    menuStyle.classList.toggle('box-shadow')
})

burgerBtn.addEventListener('click',()=>{
    menuStyle.style.right = '0'
    menuStyle.classList.toggle('box-shadow')
})

