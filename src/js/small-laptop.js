if(window.innerWidth <= 1250)
{
    document.querySelector('.about-me .text').innerHTML = `Hello, i’m <span>dmisl</span>!<br><br>I’m a self-taught full-stack developer based in <br><span>Warsaw, Poland</span>. I can develop responsive websites<br>from scratch and raise them into modern user-friendly<br>web experiences.<br><br>Transforming my creativity and knowledge into a websites has been my passion for years. I have been helping various clients to establish <br>their presence online. I always strive to learn about the newest technologies and frameworks.`
}
window.addEventListener('resize', () => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    console.log(`New resolution: ${width}x${height}`);
});