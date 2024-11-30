if(window.innerWidth <= 500)
{
  window.addEventListener('load', function () {
    const element = document.querySelector('body');
    
    const rect = element.getBoundingClientRect();
    
    let maxWidth = rect.width+'px'
    
    let hero = document.querySelector('.hero')
    hero.style.width = maxWidth
    hero.style.overflow = 'hidden'
    
    console.log('Width:', rect.width);
  })
}
function phone_check()
{
  console.log('change something on mobile change')
}
window.addEventListener('resize', phone_check)