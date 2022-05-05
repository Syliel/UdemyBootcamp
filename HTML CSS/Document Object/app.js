// const allImages = document.getElementsByTagName('img');

// for (let img of allImages) {
//     console.log(img.src)
// }

// const links = document.querySelectorAll('p a');

// for (let link of links) {
//     console.log(link.href)
// }

const allLinks = document.querySelectorAll('a')

for (let link of allLinks) {
    link.innerText = 'I am a link!'
}

const input = document.querySelector('input[type="text"]')

input.text //text
input.type = 'password' //password
input.type = 'color' //color
input.setAttribute('type', 'text')

const h1 = document.querySelector('h1');
h1.style.color = 'green'
h1.style.fontSize = '3em'
h1.style.border = '2px solid pink'

const allLinks = document.querySelectorAll('a');

for (let link of allLinks) {
    link.style.color = 'rgb(0, 108, 134)';
    link.style.textDecorationColor = 'magenta';
    link.style.textDecorationStyle = 'wavy';
}