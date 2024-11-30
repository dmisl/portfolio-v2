const element = document.querySelector('body');

const rect = element.getBoundingClientRect();

let maxWidth = rect.width+'px'

let hero = document.querySelector('.hero')
hero.style.width = maxWidth
hero.style.overflow = 'hidden'

console.log('Width:', rect.width);