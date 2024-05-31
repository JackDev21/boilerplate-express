const bodyParser = require('body-parser');
let express = require('express');
let app = express();


require("dotenv").config()

console.log("Hello World");

app.use(bodyParser.urlencoded({extended: false}))

// Assets at the /public route
app.use("/public", express.static(__dirname + "/public"));


app.get("/", (req, res) => {

  const absolutePath = __dirname + "/views/index.html"

  
  res.sendFile(absolutePath);
})

app.use(  (req, res, next) => {

  console.log(`${req.method} ${req.path} - ${req.ip}`)

  next()
})


app.get("/json",  (req, res) =>{
  const MESSAGE_STYLE = process.env.MESSAGE_STYLE

  let message = "Hello json"

  if(MESSAGE_STYLE === "uppercase"){
    message = message.toUpperCase()
  }

  res.json({message: message})
  
})


app.get("/now", (req, res, next) => {

  let time = new Date().toString()

  req.time = time
  next()

}, (req, res) =>{
  res.send({time: req.time})
 
})


app.get("/:word/echo", (req, res) => {

  let word = req.params.word

  res.send({echo: word})

})

app.get("/name", (req,res) =>{
  let {first, last} = req.query

  //first = "Jack"
  //last = "Sparrow"

  res.json({name: first +" "+ last})

})

//POST

app.post("/name", (req, res)=>{
  let {first, last } = req.body


  res.json({name: `${first} ${last}`})

})


module.exports = app;
