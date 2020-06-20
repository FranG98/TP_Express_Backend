const Adelanto = require('../models/adelanto');

const adelantoCtrl = {};

adelantoCtrl.getAdelantos = async (req, res) => {
   const adelantos = await Adelanto.find();
   res.json(adelantos);
};

adelantoCtrl.createAdelanto = async (req, res) => {
    const adelanto = new Adelanto(req.body);
    await adelanto.save();
    res.json({
        'status': 'adelanto guardado'
    });
};

adelantoCtrl.getAdelanto = async (req, res) => {
    const adelanto = await Adelanto.findById(req.params.id);
    res.json(adelanto);
};

adelantoCtrl.editAdelanto = async (req, res) => {
    const modAdelanto = new Adelanto(req.body);
    await Adelanto.findByIdAndUpdate(req.params.id, {$set: modAdelanto}, {new: true});
    res.json({
        'status': 'adelanto actualizado'
    })
};

adelantoCtrl.deleteAdelanto = async (req, res) =>{
    await Adelanto.findByIdAndRemove(req.params.id);
    res.json({
        'status': 'adelanto eliminado'
    })
}

module.exports = adelantoCtrl;