const mongoose = require('mongoose');
const { Schema } = mongoose;

const AsistenteSchema = new Schema({
    //_id: {type: String, required: true},
    usuario: {type: String, required: true},
    nombreOrganizacion: {type: String, required: true},
    solicitaConstancia: {type: Boolean, required: true},
})

module.exports = mongoose.model('Asistente', AsistenteSchema);