const express = require('express')
const controller = require('./controller')

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
});
  
router.post('/', function(req,res) { //opcion con promesas
    //console.log(req.body) // datos en la url (params)
    controller.addMessage(req.body.user,req.body.message)
      .then((fullMessage) => {
        response.success(req,res, fullMessage, 201)
      })
      .catch((error) => {
        response.error(req,res,"informacion invalida",400,"Error en la información a enviar del controlador")
      });
});;


// router.post('/', async (req,res) => { //opcion con async y await
//   try {
//     const body = await controller.addMessage(req.body.user,req.body.message)
//     response.success(req,res, body, 201)
//   } catch (error) {
//     response.error(req,res,"informacion invalida",400,"Error en la información a enviar del controlador")
//   }
// });

module.exports = router;