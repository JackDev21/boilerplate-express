let express = require('express');
let app = express();

let path = __dirname + "./views/index.html"

console.log("Hello World");


app.get(path, (req, res) => {

  res.sendFile(path)
})































module.exports = app;
