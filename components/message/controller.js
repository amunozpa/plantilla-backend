//aqui se pone la logica, comportamientos en funciones con los parametros que se necesita para tratarlo
//se modifica la informacion, se añaden datos como fecha

const chalk = require("chalk");
const store = require('../../store/mongodb');

function addMessage (user, message) {
    return new Promise ((resolve,reject) => {
        if(!user || !message) {
            console.error (chalk.yellow('[message_controller] falta ingresar algun dato'))
            reject('datos inco');
            return false
        }
        else {            
            const fullMessage = {
                user,
                message,
                date: new Date()
            }
            console.log(fullMessage);
            store.add(fullMessage)
            resolve(fullMessage);
        }
    })
}

function getMessages() {
    return new Promise((resolve,reject) => {
       resolve(store.list()); 
    });
}

module.exports={
    addMessage,
    getMessages
}