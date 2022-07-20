// fetch("https://swapi.dev/api/people/1/") //this fetch request returns a promise, so we have to use then for response and data
//     .then((res) => {
//         console.log("Resolved!", res);
//         return res.json()
//         //we call res.json() because without it, it will stop at the headers and not include the body
//         //res.json() also returns a promise, which is why we need the next .then on the data
//     })
//     .then((data) => {
//         console.log(data);
//     })
//     .catch((e) => {
//         console.log("ERROR!", e);
//     })


//For multiple requests:

// fetch("https://swapi.dev/api/people/1/")
//     .then((res) => {
//         console.log("Resolved!", res);
//         return res.json()
//     })
//     .then((data) => {
//         console.log(data);
//         return fetch("https://swapi.dev/api/people/2");
//     })
//     .then((res) => {
//         console.log("Second request resolved!");
//         return res.json()
//     })
//     .then((data) => {
//         console.log(data);
//     })
//     .catch((e) => {
//         console.log("ERROR!", e);
//     });

const loadStarWarsPeople = async () => {
    try {
        const res = await fetch("https://swapi.dev/api/people/1");
        const data = await res.json();
        console.log(data);
        const res2 = await fetch("https://swapi.dev/api/people/2");
        const data2 = await res2.json();
        console.log(data2);
    } catch (e) {
        console.log("Error", e)
    }
};

loadStarWarsPeople();
