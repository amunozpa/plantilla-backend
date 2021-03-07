//aqui se pone la logica, comportamientos en funciones con los parametros que se necesita para tratarlo
//se modifica la informacion, se añaden datos como fecha

const chalk = require("chalk");
// const store = require('./store');
const storeMysql = require('./mysql');
const TABLE = 'messages';

function addMessage (id, user, message) {
    return new Promise ((resolve,reject) => {
        console.log(id);
        console.log(user);
        console.log(message);
        if(!id || !user || !message) {
            console.error (chalk.yellow('[message_controller] falta ingresar algun dato'))
            reject('datos incorrectos');
            return false
        }
        else {            
            const fullMessage = {
                id,
                user,
                message
                //date: new Date()
            }
            console.log(fullMessage);
            storeMysql.insert(TABLE, fullMessage)
            resolve(fullMessage);
        }
    })
}

function getMessages() {
    return new Promise((resolve,reject) => {
       resolve(storeMysql.list(TABLE)); 
    });
}

module.exports={
    addMessage,
    getMessages
}