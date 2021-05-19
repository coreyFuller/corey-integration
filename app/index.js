const express = require('express')
const app = express()
const path = require('path');

// use the express-static middleware
app.use(express.static(path.join(__dirname,"/public")))

// define the first route
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, '/public/index.html'));
})

app.get('/messages', (req, res) => {
    res.send("<h1>recieved</h1>")
})

app.get('/authenticate/:token', (req, res) => {
    const token = req.params.token
    const response = require('./responses/authenticate.json')
    res.send(token)
})

app.get('/loads', (req, res) => {
    const response = require('./responses/loads.json')
    res.send(response)
})

app.put('/messages', (req, res) => {
    const response = require('./responses/messages.json')
    res.send(response)
})
// start the server listening for requests
app.listen(process.env.PORT || 3000, 
	() => console.log("Server is running..."));