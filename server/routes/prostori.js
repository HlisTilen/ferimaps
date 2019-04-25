const express = require('express');
const router = express.Router();
const prostor_controller = require('../controllers/prostor_controller');

// get all
router.route('/').get(prostor_controller.getProstori);

// get by id
router.route('/:id').get(prostor_controller.getProstor);

// add
router.route('/').post(prostor_controller.addProstor);

// delete
router.route('/:id').delete(prostor_controller.deleteProstor);

// update
router.route('/:id').put(prostor_controller.updateProstor);

module.exports = router;