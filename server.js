//crear server http con express - fuente https://www.npmjs.com/package/express

const express = require('express')
//con router podemos separar rutas usando los verbos permitidos en peticiones http
const router = express.Router();

const app = express()

app.use(router);

router.get('/messages', function(req,res) {
  res.send('listado de datos');
})

router.post('/messages', function(req,res) {
  res.send('se ingreso el nuevo dato');
})

// app.use('/', function (req, res) {
//   res.send("hola")
// })
 
app.listen(3000)

console.log("el puerto a escuchar es http://localhost:3000");


