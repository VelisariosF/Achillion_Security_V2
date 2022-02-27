const left = document.querySelector('.left');
const right = document.querySelector('.right');
const service_section_background = document.querySelector('service_container_section');
const slider = document.querySelector('.slider');

var index = 0;


left.addEventListener('click', function() {
  index = (index > 0) ? index - 1 : 0;
  slider.style.transform = 'translateX(' + (index) * -33.3333 + '%)';
 
});

right.addEventListener('click', function() {
  index = (index < 3 - 1) ? index+1 : 2
  slider.style.transform = 'translateX(' + (index) * -33.3333 + '%)';

});