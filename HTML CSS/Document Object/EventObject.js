// document.querySelector('button').addEventListener('click', function () {
//     alert('click')
// })

// const input = document.querySelector('input');

// input.addEventListener('keydown', function (evt) {
//     console.log(evt.key)
//     console.log(evt.code)
// })

window.addEventListener('keydown', function (e) {
    switch (e.code) {
        case 'ArrowUp':
            console.log("UP!");
            break;
        case 'ArrowDown':
            console.log("DOWN!")
    }
})