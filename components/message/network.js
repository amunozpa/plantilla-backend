const express = require('express')
//const controller = require('./controller')  //este usara el controlador asociado a mongodb
const controller = require('./controllerMysql') //este usara el controlador asociado a mysql

const router = express.Router();
const response = require('../../network/response'); //utiliza la plantilla para respuesta uniforme


router.get('/', function(req,res) {
  controller.getMessages()
    .then((messageList) => { //esta variable "messageList" tiene un nombre que le pongamos pero devuelve el resultado de la promesa
      response.success(req,res, messageList, 200);
    })
    .catch(error => {
      response.error(req,res,"Unexpected error",500,"Error al traer la información del controlador o la BD")
    });   
});
  
router.post('/', function(req,res) { //opcion con promesas
    //console.log(req.body) // datos en la url (params)
    controller.addMessage(req.body.id,req.body.user,req.body.message)
      .then((fullMessage) => { //esta variable "fullmessage" tiene un nombre que le pongamos pero devuelve el resultado de la promesa
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