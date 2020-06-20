const express = require('express');
const router = express.Router();

const pasajeCtrl = require('../controllers/pasaje.controller');

router.get('/', pasajeCtrl.getPasajes);
router.post('/', pasajeCtrl.createPasaje);
router.get('/:id', pasajeCtrl.getPasaje);
router.put('/:id', pasajeCtrl.editPasaje);
router.delete('/:id', pasajeCtrl.deletePasaje);

module.exports = router;