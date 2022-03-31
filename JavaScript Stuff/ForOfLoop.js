const subreddits = ['cringe', 'books', 'chickens', 'funny', 'pics', 'soccer'];

// for (let i = 0; i < subreddits.length; i++) {
//     console.log(`Visit reddit.com/r/${subreddits[i]}`)
// }

//For...Of loop 
//for (variable of iterable) {
//    statement
//}

for (let sub of subreddits) {
    console.log(`Visit reddit.com/r/${sub}`)
}

const seatingChart = [
    ['Kristen', 'Erik', 'Namita'],
    ['Geoffrey', 'Juanita', 'Antonio', 'Kevin'],
    ['Yuma', 'Sakura', 'Jack', 'Erika']
]

for (let row of seatingChart) {
    for (let student of row) {
        console.log(student);
    }
}

//You can also use For Of Loops to interate over strings

for (let char of "hello world") {
    console.log(char);
}

//For Of Loops works for any iterable object in JS, but actual Object Literals are not considered iterables. If we want to iterate over Key Value Pairs we must use a For In loop

const testScores = {
    keenan: 80,
    damon: 67,
    kim: 89,
    shawn: 91,
    marlon: 72,
    dwayne: 77,
    nadia: 83,
    elvira: 97,
    diedre: 81,
    vonnie: 60
}

// for (let person in testScores) {
//     console.log(person);
// }
// ^^ This will only give us the key value. To get the Key and value pair we will:

for (let person in testScores) {
    console.log(`${person} scored ${testScores[person]}`);
}

//You can also get an array of keys by typing..
Object.keys(testScores);
//And to get the values...
Object.values(testScores);
//And you can even get a nested array of key/value pairs by typing..
Object.entries(testScores);

//Example of iterating this way...
let total = 0;
let scores = Object.values(testScores);
for (let score of scores) {
    total += score;
}
console.log(total / scores.length);