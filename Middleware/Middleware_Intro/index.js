const express = require('express');
const app = express();
const morgan = require('morgan');


// app.use(morgan('dev'));
app.use((req, res, next) => {
    req.requestTime = Date.now();
    console.log(req.method, req.path);
    next();
});

app.use('/dogs', (req, res, next) => {
    console.log("I love dogs");
    next();
});

const verifyPassword = ((req, res, next) => {
    const { password } = req.query;
    if (password === 'chickennugget') {
        next();
    }
    res.send("Sorry, you need a password!")
});

app.get('/', (req, res) => {
    console.log(`REQUEST DATE: ${req.requestTime}`);
    res.send('HOME PAGE');
});

app.get('/dogs', (req, res) => {
    console.log(`REQUEST DATE: ${req.requestTime}`);
    res.send('Woof Woof');
});

app.get('/secret', verifyPassword, (req, res) => {
    res.send("My secret is: I hate hanging out with people")
})

app.use((req, res) => {
    res.status(404).send('Not Found!');
});

app.listen(3000, () => {
    console.log("App is running on localhost:3000");
});