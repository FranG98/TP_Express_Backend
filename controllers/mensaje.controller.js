const  Mensaje = require('../models/mensaje');

const mensajeCtrl = {};

mensajeCtrl.getMensajes = async (req, res) => {
   const empresas = await Mensaje.find();
   res.json(empresas);
};

mensajeCtrl.createMensaje = async (req, res) => {
    const mensaje = new Mensaje(req.body);
    await mensaje.save();
    res.json({
        'status': 'mensaje guardado'
    });
};

mensajeCtrl.getMensaje = async (req, res) => {
    const mensaje = await Mensaje.findById(req.params.id);
    res.json(mensaje);
};

mensajeCtrl.editMensaje = async (req, res) => {
    const modMensaje = new Mensaje(req.body);
    await Mensaje.findByIdAndUpdate(req.params.id, {$set: modMensaje}, {new: true});
    res.json({
        'status': 'mensaje actualizado'
    })
};

mensajeCtrl.deleteMensaje = async (req, res) =>{
    await Mensaje.findByIdAndRemove(req.params.id);
    res.json({
        'status': 'mensaje eliminado'
    })
}

module.exports = mensajeCtrl;