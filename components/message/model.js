const mongoose = require('mongoose');

const Schema = mongoose.Schema; //se separa de mongoose ya que es el que mas se utilizará

const mySchema = new Schema({
    user: String,
    message: { //para dar mas información se pasa un objeto y se puede usar mas filtros
        type: String,
        required: true,
    },
    date: Date
});

const model = mongoose.model('messages', mySchema);

module.exports = model;