let userNav = document.querySelector('.user-nav')
let userDes = document.querySelector('.nav-des')

userNav.addEventListener('mouseout', () =>{
    userDes.style.visibility = 'hidden'
    userDes.style.height = '0' 
})
userDes.addEventListener('mouseout', () =>{
    userDes.style.visibility = 'hidden'
    userDes.style.height = '0' 
})

userNav.addEventListener('mouseover', () =>{
    userDes.style.visibility = 'initial'
    userDes.style.height = '100%'

})
userDes.addEventListener('mouseover', () =>{
    userDes.style.visibility = 'initial'
    userDes.style.height = '100%'

})
