const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const RoteirosSchema = new Schema({
  _id: { type: mongoose.Schema.Types.ObjectId, auto: true, required: true },
  destino: { type: String, required: true },
  descritivo: { type: String, required: true },
  foto: { type: String, required: true },
  roteiro: { type: String, required: true },
})

const roteirosModel = mongoose.model('roteiros', RoteirosSchema);

module.exports = roteirosModel;
