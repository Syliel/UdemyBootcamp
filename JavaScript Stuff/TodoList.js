const list = []
let num = 0

while (list) {
    input = prompt("What would you like to do?");
    if (input.toLowerCase() === "quit") {
        break;
    } else if (input.toLowerCase() === "new") {
        num += 1;
        entry = prompt("What would you like to add to the list?")
        list.push(num, entry)
        console.log(` ${num} : ${entry} has been added to the list`)
    } else if (input.toLowerCase() === "list") {
        console.log(num, ":", list);
    }
}
