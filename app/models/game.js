const mongoose = require('mongoose')

const gameSchema = new mongoose.Schema({
  questions: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Question',
    required: true
  }],
  categories: [{
    type: String,
    // add more categories v2
    enum: ['Potpourri', 'Science', 'Web Dev']
  }],
  responses: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Response',
    required: true
  }],
  score: {
    type: Number,
    required: true
  },
  over: {
    type: Boolean,
    default: false,
    required: true
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('Game', gameSchema)
