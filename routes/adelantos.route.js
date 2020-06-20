const express = require('express');
const router = express.Router();

const adelCtrl = require('../controllers/adelanto.controller');

router.get('/', adelCtrl.getAdelantos);
router.post('/', adelCtrl.createAdelanto);
router.get('/:id', adelCtrl.getAdelanto);
router.put('/:id', adelCtrl.editAdelanto);
router.delete('/:id', adelCtrl.deleteAdelanto);

module.exports = router;