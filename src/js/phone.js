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
  const element = document.querySelector('body');
    
  const rect = element.getBoundingClientRect();
  
  let maxWidth = rect.width+'px'
  console.log(maxWidth)
  console.log(window.innerWidth)
  let containers = document.querySelectorAll('.container')
  let marginLeft = (rect.width-320)/2-4+'px'
  console.log(marginLeft)
  containers.forEach(containerr => {
    containerr.style.marginLeft = marginLeft
  });

  let menu = document.querySelector('.menu')
  document.body.style.width = maxWidth
  menu.style.width = `${maxWidth}`
}
phone_check()
window.addEventListener('resize', phone_check)