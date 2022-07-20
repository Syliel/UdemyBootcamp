const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require('method-override');
const { v4: uuid } = require('uuid');
uuid();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride('_method'))
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

const comments = [
    {
        id: uuid(),
        username: "Todd",
        comment: 'lol that is so funny'
    },
    {
        id: uuid(),
        username: "Skylar",
        comment: "I like to go birdwatching with my dog"
    },
    {
        id: uuid(),
        username: "Sk8erboi",
        comment: "Plz delete your account, Todd"
    },
    {
        id: uuid(),
        username: "Onlysayswoof",
        comment: "woof woof woof"
    }
]

app.get('/comments', (req, res) => {
    res.render('comments/index', { comments });
});
//this lets you fetch data from /comments 

app.get('/comments/new', (req, res) => {
    res.render('comments/new');
});
//this renders a form 

app.post('/comments', (req, res) => {
    const { username, comment } = req.body;
    comments.push({ username, comment, id: uuid() });
    res.redirect('/comments');
});
//this pushes data onto comments

app.get('/comments/:id', (req, res) => {
    const { id } = req.params;
    const comments = comments.find(c => c.id === id);
    res.render('comments/show', { comment });
});

app.get('/comments/:id/edit', (req, res) => {
    const { id } = req.params;
    const comments = comments.find(c => c.id === id);
    res.render('comments/edit', { comment });
});

app.patch('/comments/:id', (req, res) => {
    const { id } = req.params;
    //taking id from url
    const newCommentText = req.body.comment;
    //taking whatever was sent in body
    const foundComment = comments.find(c => c.id === id);
    //finding the id of it
    foundComment.comment = newCommentText;
    //updating comment's property to be whatever was in req.body.comment
    res.redirect('/comments');
});

app.delete('/comments/:id', (req, res) => {
    const { id } = req.params;
    comments = comments.filter(c => c.id !== id);
});


app.get('/tacos', (req, res) => {
    res.send("GET /tacos response!");
});

app.post('/tacos', (req, res) => {
    const { meat, qty } = req.body;
    res.send(`OK, here are your ${qty} ${meat} tacos`);
});

app.listen(3000, () => {
    console.log("Listening on Port 3000!");
});

