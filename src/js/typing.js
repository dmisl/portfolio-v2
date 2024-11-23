// TYPING

let typing = document.querySelector('.typing')
new TypeIt(".typing", {
    speed: 100,
    deleteSpeed: 100,
    waitUntilVisible: true,
    loop: true,
})
.type(' Full-Stack Developer')
.exec(async () => {
    await new Promise((resolve, reject) => {
    setTimeout(() => {
        return resolve();
    }, 4000);
    });
})
.delete(20)
.type('Back-end Developer')
.exec(async () => {
    await new Promise((resolve, reject) => {
    setTimeout(() => {
        return resolve();
    }, 4000);
    });
})
.move(-14)
.delete(4)
.type('Front')
.move(null, { to: "END" })
.exec(async () => {
    await new Promise((resolve, reject) => {
    setTimeout(() => {
        return resolve();
    }, 4000);
    });
})
.delete('Front-end Developer'.length)
.type('Problem Solver')
.exec(async () => {
    await new Promise((resolve, reject) => {
    setTimeout(() => {
        return resolve();
    }, 4000);
    });
})
.delete('Problem Solver'.length)
.type('Tech Nerd')
.exec(async () => {
    await new Promise((resolve, reject) => {
    setTimeout(() => {
        return resolve();
    }, 4000);
    });
})
.go();