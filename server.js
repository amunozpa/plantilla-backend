//crear server http con express - fuente https://www.npmjs.com/package/express

const express = require('express')
const app = express()
 
app.get('/', function (req, res) {
  res.send("hola")
})
 
app.listen(3000)

console.log("el puerto a escuchar es http://localhost:3000");


//comentario