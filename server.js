//crear server http con express - fuente https://www.npmjs.com/package/express

const express = require('express')
//const bodyParsegit add r = require('body-parser'); //body parser se depreco ya que al parecer esta incluido en express

const router = require('./network/routes');

const app = express()
app.use(express.json()); //alternativa a body-parser antes: bodyParser.json()
app.use(express.urlencoded({extended: false}));
router(app);

app.use('/app', express.static('public')); //agregar archivos estaticos que esten en la carpeta public, el front puede estar aqui

app.listen(3000);

console.log("el puerto a escuchar es http://localhost:3000");


