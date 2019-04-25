const sanitizeHtml = require('sanitize-html')
const Zaposlen = require('../models/zaposlen');

module.exports.getZaposleni = async function(req, res) {
  try {
    const zaposleni = await Zaposlen.find();
    res.json(zaposleni);
  } catch (err) {
    return res.status(500).send(err);
  }
}

module.exports.addZaposlen = async function(req, res) {
  const newZaposlen = new Zaposlen(req.body);

  newZaposlen.ime = sanitizeHtml(newZaposlen.ime);
  newZaposlen.priimek = sanitizeHtml(newZaposlen.priimek);
  newZaposlen.strokovni_naziv = sanitizeHtml(newZaposlen.strokovni_naziv);
  newZaposlen.email = sanitizeHtml(newZaposlen.email);
  newZaposlen.telefon = sanitizeHtml(newZaposlen.telefon);
  newZaposlen.id_prostora = sanitizeHtml(newZaposlen.id_prostora);
  try {
    let zaposlen = await newZaposlen.save();
    res.json({
      nov_zaposlen: zaposlen
    });
  } catch (err) {
    res.status(500).send(err);
  }
}

module.exports.getZaposlen = async function(req, res) {
  try {
    const zaposlen = await Zaposlen.findOne({
      _id: req.params.id
    });
    res.json({
      zaposlen
    });
  } catch (err) {
    return res.status(500).send(err);
  }
}

module.exports.deleteZaposlen = async function(req, res) {
  try {
    let zaposlen = await Zaposlen.findOneAndRemove({
      _id: req.params.id
    });

    if (!zaposlen) {
      return res.status(404).send('not found');
    } else {
      res.status(200).send('successfully deleted');
    }
  } catch (err) {
    return res.status(500).send(err);
  }
}

module.exports.updateZaposlen = async function(req, res) {
  try {
    let zaposlen = await Zaposlen.findOneAndUpdate({
        _id: req.params.id
      },
      req.body, {
        new: true
      });

    if (!zaposlen) {
      return res.status(404).send('not found');
    } else {
      res.status(200).send(zaposlen);
    }
  } catch (err) {
    return res.status(500).send(err);
  }
}