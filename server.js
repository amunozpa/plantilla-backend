//crear server http con express - fuente https://www.npmjs.com/package/express

const express = require('express')
//const bodyParser = require('body-parser'); //body parser se depreco ya que al parecer esta incluido en express
const response = require('./network/response') //utiliza la plantilla para respuesta uniforme

//con router podemos separar rutas usando los verbos permitidos en peticiones http
const router = express.Router();

const app = express()
app.use(express.json()); //alternativa a body-parser antes: bodyParser.json()
app.use(express.urlencoded({extended: false}));
app.use(router);

router.get('/messages', function(req,res) {
  console.log(req.headers);
  res.header({   //Se pueden mandar cabeceras o header personalizados
    "custom-header":"Nuestro header"
  });
  console.log(req.query); // datos en la url (params)
  console.log(req.body); //datos en el body
  
  response.success(req,res, "listado de datos", 200)
})

router.post('/messages', function(req,res) {
  console.log(req.query) // datos en la url (params)
  if(req.query.error == "ok"){
    response.error(req,res,"Error simulado en endpoint http://localhost:3000/messages?error=ok para post")
  }else {
    response.success(req,res, "Creado correctamente", 201)
  }

})

// router.post('/messages', function(req,res) {
//   res.send('se ingreso el nuevo dato');
// })

// app.use('/', function (req, res) {
//   res.send("hola")
// })
 
app.listen(3000)

console.log("el puerto a escuchar es http://localhost:3000");


