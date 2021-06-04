const mongoose = require('mongoose')

const responseSchema = new mongoose.Schema({
  // if the block has been handled
  answered: {
    type: Boolean,
    default: false,
    required: true
  },
  // is the handled answer correct?
  correct: {
    type: Boolean,
    default: false,
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
