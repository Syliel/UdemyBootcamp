const mongoose = require('mongoose');

const animeSchema = new mongoose.Schema({
    title: {
        romaji: {
            type: String,
            require: true
        },
        english: {
            type: String,
            require: true
        }
    },
    releaseData: {
        status: {
            type: String,
            require: true,
            enum: ['Finished Releasing', 'Currently Releasing', 'Not Yet Released', 'Cancelled', 'Hiatus']
        },
        season: {
            type: String,
            require: true,
            enum: ['Fall', 'Summer', 'Spring', 'Winter']
        },
        startDate: {
            year: {
                type: Number,
                require: true
            },
            month: {
                type: Number,
                require: true
            },
            day: {
                type: Number,
                require: true
            }
        },
        endDate: {
            year: {
                type: Number,
                require: true
            },
            month: {
                type: Number,
                require: true
            },
            day: {
                type: Number,
                require: true
            }
        },
    },
    genres: {
        type: String,
        require: true,
        enum: ['Action', 'Adventure', 'Comedy', 'Drama', 'Ecchi', 'Fantasy', 'Hentai', 'Horror', 'Slice of Life']
    },
    description: {
        type: String,
        require: true
    },
    image: {
        type: String,
        require: true,
    }
})

const Anime = mongoose.model('Anime', animeSchema);

module.exports = Anime;