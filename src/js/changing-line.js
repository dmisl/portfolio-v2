let symbols = ['/', '-', '\\', '|']
let index = 0

function animateTitle() {
    document.title = `dmisl ${symbols[index]} Portfolio`
    index = (index + 1) % symbols.length
}

setInterval(animateTitle, 1000)