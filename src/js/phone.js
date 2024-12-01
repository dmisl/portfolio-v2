function phone_check()
{
  // ANIMATION MANAGING
  console.log('animation managing')
  let style = document.styleSheets[0]

  if (style.cssRules) {
    console.log(style.cssRules)

    for (let i = 0; i < style.cssRules.length; i++) {
      if (style.cssRules[i] instanceof CSSKeyframesRule) {
        const keyframesRule = style.cssRules[i];

        if (keyframesRule.name === 'take_all') {
          for (let j = 0; j < keyframesRule.cssRules.length; j++) {
            if (keyframesRule.cssRules[j].keyText === '100%') {
              keyframesRule.cssRules[j].style.height = `${window.screen.height}px`;
            }
          }
        } else if (keyframesRule.name === 'get_back')
        {
          for (let j = 0; j < keyframesRule.cssRules.length; j++) {
            if (keyframesRule.cssRules[j].keyText === '0%') {
              keyframesRule.cssRules[j].style.height = `${window.screen.height}px`;
            }
          }
        }
      }
    }
  }

}
if(window.screen.width <= 1000)
{
  phone_check()
}
let phoneTimeout
window.addEventListener('resize', function () {
  clearTimeout(phoneTimeout)
  phoneTimeout = setTimeout(() => {
    if(window.screen.width <= 1000)
    {
      phone_check()
    }
  }, 500);
})
// BURGER MENU OPENING
let burger_button = document.querySelector('.burger_button')
burger_button.addEventListener('click', open_burger)
function open_burger()
{
  let menu = document.querySelector('.menu')
  menu.style.animation = 'take_all 1s forwards'
  burger_button.removeEventListener('click', open_burger)
  burger_button.innerHTML = `
    <rect x="2.65338" y="28.7692" width="37.8574" height="3.15478" transform="rotate(-45 2.65338 28.7692)" fill="white"/>
    <rect x="4.23077" y="2.00001" width="37.8574" height="3.15478" transform="rotate(45 4.23077 2.00001)" fill="white"/>
  `
  burger_button.attributes.height.value = "32"
  burger_button.attributes.viewBox.value = "0 0 32 32"
  burger_button.style.top = '0'
  burger_button.addEventListener('click', close_burger)
}
function close_burger()
{
  let menu = document.querySelector('.menu')
  menu.style.animation = 'get_back 1s forwards'
  burger_button.removeEventListener('click', close_burger)
  burger_button.innerHTML = `
    <rect width="32" height="3" fill="white"/>
    <rect x="12" y="9" width="20" height="3" fill="white"/>
  `
  burger_button.attributes.height.value = "12"
  burger_button.attributes.viewBox.value = "0 0 32 12"
  burger_button.style.top = '5px'
  burger_button.addEventListener('click', open_burger)
}