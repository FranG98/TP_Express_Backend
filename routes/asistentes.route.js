const express = require('express');
const router = express.Router();

const asistCtrl = require('../controllers/asistente.controller');

router.get('/', asistCtrl.getAsistentes);
router.post('/', asistCtrl.createAsistente);
router.get('/:id', asistCtrl.getAsistente);
router.put('/:id', asistCtrl.editAsistente);
router.delete('/:id', asistCtrl.deleteAsistente);

module.exports = router;