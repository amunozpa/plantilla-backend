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
  console.log(req.headers);
  res.header({   //Se pueden mandar cabeceras o header personalizados
    "custom-header":"Nuestro header"
  });
  console.log(req.query); // datos en la url (params)
  console.log(req.body); //datos en el body
  
  res.send('listado de datos');
})

router.post('/messages', function(req,res) {
  console.log(req.query) // datos en la url (params)
  console.log(req.body) //datos en el body
  //res.status(201).send(); //esto manda algo al cliente en este caso un dato del request
  res.status(201).send({error:'',body:'creado correctamente'}); //respuesta estructurada que devuelve objetoso o array (cualquier cosa)
})

// router.post('/messages', function(req,res) {
//   res.send('se ingreso el nuevo dato');
// })

// app.use('/', function (req, res) {
//   res.send("hola")
// })
 
app.listen(3000)

console.log("el puerto a escuchar es http://localhost:3000");


