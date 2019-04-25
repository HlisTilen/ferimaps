const sanitizeHtml = require('sanitize-html')
const Prostor = require('../models/prostor');

module.exports.getProstori = async function(req, res) {
  try {
    const prostori = await Prostor.find();
    res.json(prostori);
  } catch (err) {
    return res.status(500).send(err);
  }
}

module.exports.addProstor = async function(req, res) {
  const newProstor = new Prostor(req.body);

  newProstor.naziv = sanitizeHtml(newProstor.naziv);
  newProstor.objekt = sanitizeHtml(newProstor.objekt);
  newProstor.nadstropje = sanitizeHtml(newProstor.nadstropje);
  newProstor.soba = sanitizeHtml(newProstor.soba);
  newProstor.namembnost = sanitizeHtml(newProstor.namembnost);
  try {
    let prostor = await newProstor.save();
    res.json({
      nov_prostor: prostor
    });
  } catch (err) {
    res.status(500).send(err);
  }
}

module.exports.getProstor = async function(req, res) {
  try {
    const prostor = await Prostor.findOne({
      _id: req.params.id
    });
    res.json({
      prostor
    });
  } catch (err) {
    return res.status(500).send(err);
  }
}

module.exports.deleteProstor = async function(req, res) {
  try {
    let prostor = await Prostor.findOneAndRemove({
      _id: req.params.id
    });

    if (!prostor) {
      return res.status(404).send('not found');
    } else {
      res.status(200).send('successfully deleted');
    }
  } catch (err) {
    return res.status(500).send(err);
  }
}

module.exports.updateProstor = async function(req, res) {
  try {
    let prostor = await Prostor.findOneAndUpdate({
        _id: req.params.id
      },
      req.body, {
        new: true
      });

    if (!prostor) {
      return res.status(404).send('not found');
    } else {
      res.status(200).send(prostor);
    }
  } catch (err) {
    return res.status(500).send(err);
  }
}