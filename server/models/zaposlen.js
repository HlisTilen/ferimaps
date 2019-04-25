const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const zaposlenSchema = new Schema({
    ime: { type: String, required: true },
    priimek: { type: 'String', required: true },
    strokovni_naziv: { type: 'String', required: true },
    email: { type: 'String', required: true },
    telefon: { type: 'String', required: true },
    id_prostora: { type: 'String', required: true },
});

module.exports = mongoose.model('Zaposlen', zaposlenSchema);

