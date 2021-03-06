const express = require('express')

const router = express.Router();
const response = require('../../network/response'); //utiliza la plantilla para respuesta uniforme


router.get('/', function(req,res) {
    console.log(req.headers);
    res.header({   //Se pueden mandar cabeceras o header personalizados
      "custom-header":"Nuestro header"
    });
    console.log(req.query); // datos en la url (params)
    console.log(req.body); //datos en el body
    
    response.success(req,res, "listado de datos", 200);
  })
  
router.post('/', function(req,res) {
    console.log(req.query) // datos en la url (params)
    if(req.query.error == "ok"){
        response.error(req,res,"Error simulado en endpoint http://localhost:3000/messages?error=ok para post",500,"error que no debe ver el cliente"); //los errores deben manejarse para limitar informacion al cliente por seguridad
    }else {
        response.success(req,res, "Creado correctamente", 201);
    }
})

  module.exports = router;