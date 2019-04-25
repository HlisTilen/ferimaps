const express = require('express');
const router = express.Router();
const zaposlen_controller = require('../controllers/zaposlen_controller');

// get all
router.route('/').get(zaposlen_controller.getZaposleni);

// get by id
router.route('/:id').get(zaposlen_controller.getZaposlen);

// add
router.route('/').post(zaposlen_controller.addZaposlen);

// delete
router.route('/:id').delete(zaposlen_controller.deleteZaposlen);

// update
router.route('/:id').put(zaposlen_controller.updateZaposlen);

module.exports = router;