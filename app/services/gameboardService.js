const _ = require('lodash')

const Question = require('../models/question')

const categoriesEnum = ['Pop Culture', 'Science', 'Web Dev Abbreviations', 'The 70s Movies & Music', 'The 80s', 'The 90s']

const createGameboardAsync = async function (userId) {
  // retrieve #3 categories randomly
  const categories = _.sampleSize(categoriesEnum, 3)
  // query questions to get all questions with matching categories
  let questions = await Question.find({ category: { $in: categories } })
  questions = _.orderBy(questions, ['category', 'score'], ['asc', 'asc'])

  const gameboard = {
    questions: questions,
    totalScore: 0,
    isOver: false,
    responses: [],
    owner: userId
  }
  return gameboard
}

module.exports = {
  createGameboardAsync
}
