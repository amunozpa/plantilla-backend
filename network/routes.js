
//con routes podemos separar rutas usando los verbos permitidos en peticiones http desde distintos componentes
const message = require('../components/message/network');

const routes = (server) => {
    server.use('/messages',message);
}

module.exports = routes;