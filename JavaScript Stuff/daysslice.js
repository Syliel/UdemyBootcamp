function returnDay(day) {
    //let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
    let days = {
        1: "Monday",
        2: "Tuesday",
        3: "Wednesday",
        4: "Thursday",
        5: "Friday",
        6: "Saturday",
        7: "Sunday"
    };
    if (day < 1 || day > 7) {
        return null
    }
    return days[day];
}