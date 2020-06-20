const Pasaje = require('../models/pasaje');

const pasajeCtrl = {};

pasajeCtrl.getPasajes = async (req, res) => {
   const pasajes = await Pasaje.find();
   res.json(pasajes);
};

pasajeCtrl.createPasaje = async (req, res) => {
    const pasaje = new Pasaje(req.body);
    await pasaje.save();
    res.json({
        'status': 'pasaje guardado'
    });
};

pasajeCtrl.getPasaje = async (req, res) => {
    const pasaje = await Pasaje.findById(req.params.id);
    res.json(pasaje);
};

pasajeCtrl.editPasaje = async (req, res) => {
    const modPasaje = new Pasaje(req.body);
    await Pasaje.findByIdAndUpdate(req.params.id, {$set: modPasaje}, {new: true});
    res.json({
        'status': 'pasaje actualizado'
    })
};

pasajeCtrl.deletePasaje = async (req, res) =>{
    await Pasaje.findByIdAndRemove(req.params.id);
    res.json({
        'status': 'pasaje eliminado'
    })
}

module.exports = pasajeCtrl;