const mongoose = require('mongoose');
const Empresa = require('./empresa');
const { Schema } = mongoose;

const MensajeSchema = new Schema({
    //_id: {type: String, required: true},
    para: {type: String, required: true},
    desde: {type: String, required: true},
    texto: {type: String, required: true},
    fecha: {type: Date, default: Date.now()},
    empresa: {type: Schema.Types.ObjectId, ref: Empresa},
})

module.exports = mongoose.model('Mensaje', MensajeSchema);