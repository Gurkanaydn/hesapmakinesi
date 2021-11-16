var express = require('express'); 
var app = express(); 
var path = require('path'); 


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

var port = 8000; 
app.listen(port, () => {
    console.log("Running on 8000 port now...");
});