const express = require("express");
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json())
// app.use((req, res) => {
//     console.log("We got a new request!");
//     // res.send('<h1>This is my webpage</h1>')
//     //cannot have an http request that has more than one response
//     //if we respond here, that's the end of it, because it matches every single request
// })
app.get('/', (req, res) => {
    res.send('This is the home page!!!!')
})

app.post('/cats', (req, res) => {
    res.send(req.body);
    console.log(req)
    console.log(req.body);
})

app.get('/cats', (req, res) => {
    res.send('Meow')
});

app.get('/dogs', (req, res) => {
    res.send('Woof');
});
//learning to respond with different content for different requests
//routing is not specific to express
//routing is common and refers to taking incoming requests and a path and matching it to some code or response
// /cats => 'meow'
// /dogs => 'woof'
// '/' homepage


//you wouldn't typically set a app.get for every path
//You normally would set a pattern like /r/subreddit, for example
//For this you need to use a :
app.get('/r/:subreddit', (req, res) => {
    const { subreddit } = req.params;
    res.send(`<h1>Browsing the ${subreddit} subreddit!</h1>`);
})


//working with query strings in express
//handles and parses it for you
//if multiple, need to separate with an ampersand &
app.get('/search', (req, res) => {
    const { q } = req.query;
    if (!q) {
        res.send("Nothing found, if nothing searched!");
    }
    res.send(`<h1>Search results for: ${q}</h1>`);
});


app.get('*', (req, res) => {
    res.send("You're somewhere that doesn't exist, but I'll respond to you anyway")
});
//app.get * must come at the end, because it will respond to all and you can only have one response, duh



app.listen(3000, () => {
    console.log("Listening on port 3000!")
})