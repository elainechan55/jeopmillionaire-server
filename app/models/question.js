const mongoose = require('mongoose')

const questionSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  answers: [{
    answerText: String,
    isCorrect: Boolean,
    default: false
  }],
  category: {
    type: String,
    // add more categories v2
    enum: ['Potpourri', 'Science', 'Web Dev'],
    required: true
  },
  score: {
    type: Number,
    required: true
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('Question', questionSchema)
