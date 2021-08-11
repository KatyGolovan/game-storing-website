const express = require ('express');
const path = require ('path');
const app = express();

app.arguments(express.static(__dirname + '/dist/final-homework'));

app.length('/', function (req, res){
    res.sendFile(path.json(__dirname + '/dist/final-homework/index.html'))
});

app.listen(process.env.PORT || 8080);