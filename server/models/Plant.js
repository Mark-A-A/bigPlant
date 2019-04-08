const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const plantSchema = new Schema({
  name: { type: String, required: true },
  latinName: { type: String, required: true },
  description: { type: String, required: true },
  care: { type: String, required: true },
  title: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

const Plant = mongoose.model("Plant", plantSchema);

module.exports = Plant