const express = require('express');
const router = express.Router();

const msjCtrl = require('../controllers/mensaje.controller');

router.get('/', msjCtrl.getMensajes);
router.post('/', msjCtrl.createMensaje);
router.get('/:id', msjCtrl.getMensaje);
router.put('/:id', msjCtrl.editMensaje);
router.delete('/:id', msjCtrl.deleteMensaje);

module.exports = router;