const mongoose = require('mongoose');
const Anime = require('./models/anime');

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://localhost:27017/animeList');
};



const seedAnime = [
    {
        title: {
            romaji: 'Retsujitsu no Ougonkyou',
            english: 'Made in Abyss'
        },
        releaseData: {
            status: 'Currently Releasing',
            season: 'Summer',
            startDate: {
                year: 2022,
                month: 07,
                day: 06
            },
            endDate: {
                year: 2022,
                month: 09,
                day: 21
            },
        },
        genres: 'Adventure',
        description: 'Corners of the world are scourned for their secrets. Follow people down massive holes!',
        image: 'https://cdn.myanimelist.net/images/anime/6/86733l.jpg'
    },
    {
        title: {
            romaji: 'Shingeki no Kyojin',
            english: 'Attack on Titan'
        },
        releaseData: {
            status: 'Currently Releasing',
            season: 'Spring',
            startDate: {
                year: 2013,
                month: 07,
                day: 06
            },
            endDate: {
                year: 2023,
                month: 09,
                day: 21
            },
        },
        genres: 'Action',
        description: 'Titans and stuff all over the place, aaaaahhhh',
        image: 'https://cdn.myanimelist.net/images/anime/10/47347.jpg'
    }
]



Anime.insertMany(seedAnime)
    .then(res => {
        console.log(res)
    })
    .catch(e => {
        console.log(e)
    })
