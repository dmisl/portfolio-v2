document.body.setAttribute('hidden', '')
let normalWidth = window.innerWidth 
document.body.style.width = normalWidth+'px'
document.body.removeAttribute('hidden')
document.body.style.overflowX = 'hidden'
document.addEventListener('touchmove', (event) => {
    console.log(event.touches[0].pageX)
    if (event.touches[0].pageX !== 0) {
      event.preventDefault(); // Prevent horizontal swiping
    }
}, { passive: false });