let userNav = document.querySelector('.user-nav')
let userDes = document.querySelector('.nav-des')

userNav.addEventListener('mouseout', () =>{
    userDes.style.visibility = 'hidden'
})
userDes.addEventListener('mouseout', () =>{
    userDes.style.visibility = 'hidden'
})

userNav.addEventListener('mouseover', () =>{
    userDes.style.visibility = 'initial'

})
userDes.addEventListener('mouseover', () =>{
    userDes.style.visibility = 'initial'

})
