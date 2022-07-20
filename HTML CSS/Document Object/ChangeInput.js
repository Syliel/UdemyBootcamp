const input = document.querySelector('input');
const h1 = document.querySelector('h1');
// input.addEventListener('change', function () {
//     console.log("You changed me!")
// })

input.addEventListener('input', function (e) {
    h1.innerText = `Welcome, ${input.value}`
    if (input.value === "") {
        h1.innerText = 'Enter your Username'
    }
})
