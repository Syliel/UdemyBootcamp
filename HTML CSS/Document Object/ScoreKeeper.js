const player1 = document.querySelector('#player1')
const player2 = document.querySelector('#player2')
const reset = document.querySelector('#reset')
const score = document.querySelector('#score')
const playing = document.querySelector('#playing')
const butt1 = document.querySelector('#butt1')
const butt2 = document.querySelector('#butt2')
let player1Score = 0;
let player2Score = 0;


butt1.addEventListener('click', function () {
    player1Score += 1;
    updateScore();

});


butt2.addEventListener('click', function () {
    player2Score += 1;
    updateScore();
})

reset.addEventListener('click', function () {
    player1Score = 0;
    player2Score = 0;
    player1.style.color = "black";
    player2.style.color = "black";
    butt1.disabled = false;
    butt2.disabled = false;
    updateScore();
})

const updateScore = function () {
    player1.innerText = player1Score;
    player2.innerText = player2Score;

    if (player2Score == playing.value) {
        player2.style.color = "green";
        butt1.disabled = true;
        butt2.disabled = true;
        player1.style.color = "red";
    } else if (player1Score == playing.value) {
        player2.style.color = "red";
    }

    player1.innerText = player1Score;
    if (player1Score == playing.value) {
        player1.style.color = "green";
        butt2.disabled = true;
        player2.style.color = "red"
        butt1.disabled = true;
    } else if (player2Score == playing.value) {
        player1.style.color = "red";
    }
}





