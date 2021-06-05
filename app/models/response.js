const mongoose = require('mongoose')

const responseSchema = new mongoose.Schema({
  // is the handled answer correct?
  correct: {
    type: Boolean,
    default: false,
    required: true
  },
  answer: {
    type: String,
    required: true
  },
  game: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Gameboard',
    required: true
  }],
  question: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Question',
    required: true
  }]
}, {
  timestamps: true
})

module.exports = mongoose.model('Response', responseSchema)
