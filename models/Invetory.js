const mongoose = require('mongoose')

const invetorySchema = new mongoose.Schema({
  item: {
    type: String,
  },
  itemDescription: {
    type: String,
  },
  brand: {
    type: String,
  },
  types: {
    type: String,
  },
  count: {
    type: Number,
  },
  price: {
    type: Number,
  },
  date: {
    type: Date,
    default: Date.now
  }
})

const Invetory = mongoose.model('Invetory', invetorySchema)

module.exports = Invetory
