//mocky de la BD, el arreglo simula la BD

const list = [];

function addMessage(message) {
    return list.push(message);
}

function getMessages() {
    return list;
}

module.exports = {
    add: addMessage,
    list: getMessages
}