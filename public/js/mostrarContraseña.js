window.onload = function(){
    let mostrarPassword = document.querySelectorAll('.mostrarEsconderPassword');
    let mostrarEmoji = document.querySelectorAll('.mostrarPassword');
    let esconderEmoji = document.querySelectorAll('.esconderPassword');
    let mostrarPassword2 = document.querySelector('#inputPassword')
    let mostrarPassword3 = document.querySelector('#inputPassword2')

    for (let i = 0; i < mostrarEmoji.length; i++) {
        mostrarEmoji[i].addEventListener("click", function() {
            mostrarEmoji[i].style.display = 'none'
            esconderEmoji[i].style.display = 'block'
            mostrarPassword[i].type = 'password'
        });
    }

    for (let i = 0; i < mostrarEmoji.length; i++) {
        esconderEmoji[i].addEventListener("click", function() {
            esconderEmoji[i].style.display = 'none'
            mostrarEmoji[i].style.display = 'block'
            mostrarPassword[i].type = 'text'
        });
    }

}
