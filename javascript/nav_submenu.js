const menu = document.querySelector('.menu')
const close = document.querySelector('.close')
const nav = document.querySelector('nav')
   menu.addEventListener('click', () => 
   { 
       nav.classList.remove('close-nav')
       nav.classList.add('open-nav')
    
})

            close.addEventListener('click', () => {
                nav.classList.remove('open-nav')
                nav.classList.add('close-nav')
            })