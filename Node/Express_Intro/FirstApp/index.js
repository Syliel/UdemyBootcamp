const express = require("express");
const app = express();
// console.dir(app)
//this will show you the functions available


app.use((req, res) => {
    console.log("We got a new request!")
    // res.send("Hello, we got your request! This is a response!")
    res.send({ color: 'red' })
});


//app.use needs a callback
//anytime we have an incomming request, this callback will run

app.listen(3000, () => {
    console.log("Listening on port 3000")
});
//app.listen needs to have a port
//this will start the server listening for any requests
//go to localhost:3000 and it will say cannot get / which means its listening but not being responded with content
//We can have different servers on different ports.
//Commonly used ports are 3000 and 8080


