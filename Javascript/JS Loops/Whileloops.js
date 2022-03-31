// let count = 0;
// while (count < 10) {
//     console.log(count);
//     count++;
// }

//You would must likely use a for loop for the one above. ^


const SECRET = "BabyHippo";

let guess = prompt("enter the secret code...");
while (guess !== SECRET) {
    guess = prompt("enter the secret code...");
}
console.log("Congrats. You got the secret!!")