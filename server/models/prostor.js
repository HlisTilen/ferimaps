const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const prostorSchema = new Schema({
    naziv: { type: 'String', required: true },
    objekt: { type: 'String', required: true },
    nadstropje: { type: 'String', required: true },
    soba: { type: 'String', required: true },
    namembnost: { type: 'String', required: true },
});

module.exports = mongoose.model('Prostor', prostorSchema);
