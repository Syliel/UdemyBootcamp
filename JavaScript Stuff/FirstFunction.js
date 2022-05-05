function sing() {
    console.log("Do");
    console.log("RE");
    console.log("MI");
}


//this repeat function repeats the first argument the number of times of the second argument
function repeat(msg, num) {
    let result = '';
    for (let i = 0; i < num; i++) {
        result += msg;
    }
    console.log(result);
}
repeat('$', 5)

//can have more than two arguments


// function add(x, y) {
//     let sum = x + y;
//     return sum;
//     let end = "do the end thing"
// }

// that last let will not run or work because return ends a function

function add(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        return false;
    }
    return = x + y;

}

function lastElement(arr) {

}