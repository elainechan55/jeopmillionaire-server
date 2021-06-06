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
    enum: ['Pop Culture', 'Science', 'Web Dev Abbreviations', 'The 70s Movies & Music', 'The 80s', 'The 90s'],
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
