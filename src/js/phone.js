function phone_check()
{
  // PROJECTS MANAGEMENT
  let columns = document.querySelectorAll('.column')
  columns.forEach(column => {
    column.style.cssText = ``
    column.querySelectorAll('.item').forEach(item => {
      item.style.cssText = ``
    })
  });
  // ABOUT ME TEXT
  let text = document.querySelector('.about-me .text')
  text.innerHTML = `Hello, i’m <span>dmisl</span>!<br><br>I’m a self-taught full-stack developer<br>based in <span>Warsaw, Poland</span>. I can develop<br>responsive websites from scratch and<br>raise them into modern user-friendly<br>web experiences.<br><br>Transforming my creativity and<br>knowledge into a websites has been my<br>passion for years. I have been<br>helping various clients to establish<br>their presence online. I always strive<br>to learn about the newest technologies<br>and frameworks.`
  // CONTACTS TEXT
  text = document.querySelector('.contacts .text')
  text.innerHTML = `I’m open both full-time roles and<br>freelance collaborations. <br><br><span>// I’m always excited to take on new<br>challenges. <br>// If you want to discuss something,<br>don’t hesitate to reach out. <br> // I look forward to the opportunity to<br>create something amazing together!</span>`
}
if(window.screen.width <= 500)
{
  phone_check()
}
function tablet_check()
{
  let link_width = (window.screen.width-750)/2
  document.querySelectorAll('.links')[1].style.cssText = `width: ${link_width}px;`
}
if(window.screen.width <= 1000 && window.screen.width > 500)
{
  tablet_check()
  document.querySelector('.projects .content .item .content .desc').innerHTML = `Educational management for<br>schools`
} else
{
  document.querySelector('.projects .content .item .content .desc').innerHTML = `Educational management for schools`
}
let phoneTimeout
window.addEventListener('resize', function () {
  clearTimeout(phoneTimeout)
  phoneTimeout = setTimeout(() => {
    if(window.screen.width <= 500)
    {
      phone_check()
    } else
    {
      document.querySelector('.contacts .text').innerHTML = `I’m open both full-time roles and freelance collaborations. <br><br><span>// I’m always excited to take on new challenges. <br>// If you want to discuss something, don’t hesitate to reach out. <br> // I look forward to the opportunity to create something amazing together!</span>`
    }
  }, 500);
  if(window.screen.width <= 1000 && window.screen.width > 500)
  {
    tablet_check()
    document.querySelector('.projects .content .item .content .desc').innerHTML = `Educational management for<br>schools`
  } else
  {
    document.querySelectorAll('.links')[1].style.cssText = ``
    document.querySelector('.projects .content .item .content .desc').innerHTML = `Educational management for schools`
  }
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
    setTimeout(() => {
      menu.style.animation = ""
    }, 1000);
  }

// MENU SWITCHING
let menu_items = document.querySelectorAll('.burger_content a')
menu_items.forEach(menu_item => {
  menu_item.addEventListener('click', close_burger)
});