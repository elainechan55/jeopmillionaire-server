const mongoose = require('mongoose')

const questionSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  answers: [{
    answer: String,
    correct: Boolean,
    default: false
  }],
  category: {
    type: String,
    // add more categories v2
    enum: ['Potpourri', 'Science', 'Web Dev'],
    required: true
  },
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
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('Question', questionSchema)
