//crear server http con express - fuente https://www.npmjs.com/package/express

const express = require('express')
//const bodyParser = require('body-parser'); //body parser se depreco ya que al parecer esta incluido en express

//con router podemos separar rutas usando los verbos permitidos en peticiones http
const router = express.Router();

const app = express()
app.use(express.json()); //alternativa a body-parser antes: bodyParser.json()
app.use(express.urlencoded({extended: false}));
app.use(router);

router.get('/messages', function(req,res) {
  console.log(req.query) // datos en la url (params)
  console.log(req.body) //datos en el body
  
  res.send('listado de datos');
})

router.delete('/messages', function(req,res) {
  console.log(req.query) // datos en la url (params)
  console.log(req.body) //datos en el body
  res.send('Mensaje request ' + req.body.saludo+ ' '+ req.query.order); //esto manda algo al cliente en este caso un dato del request
})

router.post('/messages', function(req,res) {
  res.send('se ingreso el nuevo dato');
})

// app.use('/', function (req, res) {
//   res.send("hola")
// })
 
app.listen(3000)

console.log("el puerto a escuchar es http://localhost:3000");


