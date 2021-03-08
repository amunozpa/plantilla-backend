const db = require('mongoose');
const Model = require('../components/message/model');

const uri = 'mongodb+srv://db_user_kravenkov:mongodb@cluster0.9fafp.mongodb.net/test?retryWrites=true&w=majority' //se pone user:pwd... net./nombreBD

db.Promise = global.Promise; //le dice a mongoose que use promesas

//Conexion con MongoDB
db.connect(uri,{  //crea la conexion con la base de datos a la vez connnect te trae una promesa
    useNewUrlParser: true,
    useUnifiedTopology: true,
    //dbName: 'test', //solo si se quiere elegir otra DB para las gestiones
})
    .then(() => console.log('[db] Conectada con éxito'))
    .catch(err => console.error('[db]', err));

function addMessage(message) {
    const myMessage = new Model(message);
    myMessage.save();
}

async function getMessages() {
    const messages = await Model.find();
    return messages;
}

module.exports = {
    add: addMessage,
    list: getMessages
}