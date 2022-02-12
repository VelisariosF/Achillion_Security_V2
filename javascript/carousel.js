const next_button = document.getElementsByClassName('next_button')
const prev_button = document.getElementsByClassName('prev_button')

next_button.addEventListener('click', () => {
        const offset = 1
        const elements = next_button.querySelectorAll('slide-show-element');
      
    
    const activeSlide = elements.querySelector('[data-active]');
    let newIndex = elements.indexOf(activeSlide) + 1
    if (newIndex < 0) newIndex = elements.children.length - 1
    if (newIndex >= elements.children.length) newIndex = 0

    elements[newIndex].dataset.active = true
    delete activeSlide.dataset.active
    })



    prev_button.addEventListener('click', () => {
        const offset = -1
        const elements = prev_button
        .closest('[data-carousel]')
        .querySelector('[slide-show-element]')

    const activeSlide = elements.querySelector('[data-active]');
    let newIndex = [...elements.children].indexOf(activeSlide) - 1
    if (newIndex < 0) newIndex = elements.children.length - 1
    if (newIndex >= elements.children.length) newIndex = 0

    elements.children[newIndex].dataset.active = true
    delete activeSlide.dataset.active
    })

