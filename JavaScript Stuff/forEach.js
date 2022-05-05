const movies = [
    {
        title: 'Amadeus',
        score: 99
    },
    {
        title: 'Stand By Me',
        score: 85
    },
    {
        title: 'Parasite',
        score: 95
    },
    {
        title: 'Alien',
        score: 90
    }
]

// Print out movie and score out of 100

movies.forEach(function (movie) {
    console.log(`${movie.title} - ${movie.score}/100`)
})