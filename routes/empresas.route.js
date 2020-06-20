const express = require('express');
const router = express.Router();

const empCtrl = require('../controllers/empresa.controller');

router.get('/', empCtrl.getEmpresas);
router.post('/', empCtrl.createEmpresa);
router.get('/:id', empCtrl.getEmpresa);
router.put('/:id', empCtrl.editEmpresa);
router.delete('/:id', empCtrl.deleteEmpresa);

module.exports = router;