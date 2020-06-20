const Empresa = require('../models/empresa');

const empresaCtrl = {};

empresaCtrl.getEmpresas = async (req, res) => {
   const empresas = await Empresa.find();
   res.json(empresas);
};

empresaCtrl.createEmpresa = async (req, res) => {
    const empresa = new Empresa(req.body);
    await empresa.save();
    res.json({
        'status': 'empresa guardada'
    });
};

empresaCtrl.getEmpresa = async (req, res) => {
    const empresa = await Empresa.findById(req.params.id);
    res.json(empresa);
};

empresaCtrl.editEmpresa = async (req, res) => {
    const modEmpresa = new Empresa(req.body);
    await Empresa.findByIdAndUpdate(req.params.id, {$set: modEmpresa}, {new: true});
    res.json({
        'status': 'empresa actualizada'
    })
};

empresaCtrl.deleteEmpresa = async (req, res) =>{
    await Empresa.findByIdAndRemove(req.params.id);
    res.json({
        'status': 'empresa eliminada'
    })
}

module.exports = empresaCtrl;