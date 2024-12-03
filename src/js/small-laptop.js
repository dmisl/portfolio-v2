function check()
{
    if(window.screen.width <= 1250 && window.screen.width > 500)
    {
        document.querySelector('.about-me .text').innerHTML = `Hello, i’m <span>dmisl</span>!<br><br>I’m a self-taught full-stack developer based in <br><span>Warsaw, Poland</span>. I can develop responsive websites<br>from scratch and raise them into modern user-friendly<br>web experiences.<br><br>Transforming my creativity and knowledge into a websites has been my passion for years. I have been helping various clients to establish <br>their presence online. I always strive to learn about the newest technologies and frameworks.`
    } else
    {
        document.querySelector('.about-me .text').innerHTML = `Hello, i’m <span>dmisl</span>!<br><br>I’m a self-taught full-stack developer based in <span>Warsaw, Poland</span>. I can develop responsive websites from<br>scratch and raise them into modern user-friendly web experiences.<br><br>Transforming my creativity and knowledge into a websites has been my passion for years. I have been helping various clients to establish <br>their presence online. I always strive to learn about the newest technologies and frameworks.`
    }
}
window.addEventListener('load', check)
window.addEventListener('resize', check);