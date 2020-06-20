const mongoose = require('mongoose');
const Adelanto = require('./adelanto');
const { Schema } = mongoose;

const PasajeSchema = new Schema({
    dniPasajero: {type: String, required: true},
    precioPasaje: {type: Number, required: true},
    categoriaPasajero: {type: String, required: true},
    fechaCompra: {type: Date, default: Date.now()},
    adelantos: {type: [Adelanto.schema]},
})

module.exports = mongoose.model('Pasaje', PasajeSchema);