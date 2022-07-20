const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const methodOverride = require('method-override');


const Anime = require('./models/anime')

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://localhost:27017/animeList');
};

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(methodOverride('_method'))
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'));


app.get('/anime', async (req, res) => {
    const animes = await Anime.find({})
    res.render('index', { animes })
});

app.get('/anime/new', (req, res) => {
    res.render('new')
});

app.post('/anime', async (req, res) => {
    const newAnime = new Anime(req.body);
    await newAnime.save();
    res.redirect('/anime')
});

app.get('/anime/:id', async (req, res) => {
    const { id } = req.params;
    const anime = await Anime.findById(id);
    res.render('show', { anime })
});


app.listen(3000, () => {
    console.log("App is listening on port 3000")
});