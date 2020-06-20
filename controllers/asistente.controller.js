const Asistente = require('../models/asistente');

const asistenteCtrl = {};

asistenteCtrl.getAsistentes = async (req, res) => {
   const asistentes = await Asistente.find();
   res.json(asistentes);
};

asistenteCtrl.createAsistente = async (req, res) => {
    const asistente = new Asistente(req.body);
    await asistente.save();
    res.json({
        'status': 'asistente guardado'
    });
};

asistenteCtrl.getAsistente = async (req, res) => {
    const asistente = await Asistente.findById(req.params.id);
    res.json(asistente);
};

asistenteCtrl.editAsistente = async (req, res) => {
    const modAsistente = new Asistente(req.body);
    await Asistente.findByIdAndUpdate(req.params.id, {$set: modAsistente}, {new: true});
    res.json({
        'status': 'asistente actualizado'
    })
};

asistenteCtrl.deleteAsistente = async (req, res) =>{
    await Asistente.findByIdAndRemove(req.params.id);
    res.json({
        'status': 'asistente eliminado'
    })
}

module.exports = asistenteCtrl;