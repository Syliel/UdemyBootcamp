const express = require('express');
const app = express();
const morgan = require('morgan');

const AppError = require('./AppError');


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
    throw new AppError('password required', 401);
});

app.get('/', (req, res) => {
    console.log(`REQUEST DATE: ${req.requestTime}`);
    res.send('HOME PAGE');
});

app.get('/error', (req, res) => {
    chicken.fly()
})

app.get('/dogs', (req, res) => {
    console.log(`REQUEST DATE: ${req.requestTime}`);
    res.send('Woof Woof');
});

app.get('/secret', verifyPassword, (req, res) => {
    res.send("My secret is: I hate hanging out with people")
})

app.get('/admin', (req, res) => {
    throw new AppError('You are not an Admin!', 403)
});

app.use((req, res) => {
    res.status(404).send('Not Found!');
});

// app.use((err, req, res, next) => {
//     console.log("*********************************************************************")
//     console.log("**************************ERRRRORRR**********************************")
//     console.log("*********************************************************************")
//     next(err);
// });

app.use((err, req, res, next) => {
    const { status = 500, message = 'Something went wrong' } = err;  //the = 500 is a default error given so that if there's an error thrown not by us, it'll still pass the status check
    res.status(status).send(message)
})

app.listen(3000, () => {
    console.log("App is running on localhost:3000");
});