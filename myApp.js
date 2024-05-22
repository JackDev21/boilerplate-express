let express = require('express');
let app = express();

require("dotenv").config()

console.log("Hello World");


// Assets at the /public route
app.use("/public", express.static(__dirname + "/public"));


app.get("/", (req, res) => {

  const absolutePath = __dirname + "/views/index.html"

  
  res.sendFile(absolutePath);
})


app.get("/json",  (req, res) =>{
  const MESSAGE_STYLE = process.env.MESSAGE_STYLE

  let message = "Hello json"

  if(MESSAGE_STYLE === "uppercase"){
    message = message.toUpperCase()
  }

  res.json({message: message})
  
})



module.exports = app;
