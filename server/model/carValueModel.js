/* eslint-disable no-undef */
const mongoose = require("mongoose")

const carValueDetails = mongoose.Schema({
  carimage: {
    type: String,
    required: true,
  },
  docimage: {
    type: String,
    required: true,
  },
  idimage: {
    type: String,
    required: true,
  },
  amount: {
    type: String,
    required: true,
  },
  currency: {
    type: String,
    required: true,
  },
  insurancetype: {
    type: String,
    required: true,
  },
  duration: {
    type: String,
    required: true,
  },
    usage: {
    type: String,
    required: true,
  },
  calcAmount: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
}, {timestamps: true});

module.exports = mongoose.model("CarValue", carValueDetails);
