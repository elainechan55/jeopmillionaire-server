// Express docs: http://expressjs.com/en/api.html
const express = require('express')
// Passport docs: http://www.passportjs.org/docs/
const passport = require('passport')

// pull in Mongoose model for gameboards
const Gameboard = require('../models/gameboard')
const gameboardService = require('../services/gameboardService')

// this is a collection of methods that help us detect situations when we need
// to throw a custom error
const customErrors = require('../../lib/custom_errors')

// we'll use this function to send 404 when non-existant document is requested
const handle404 = customErrors.handle404
// we'll use this function to send 401 when a user tries to modify a resource
// that's owned by someone else
const requireOwnership = customErrors.requireOwnership

// this is middleware that will remove blank fields from `req.body`, e.g.
// { gameboard: { title: '', text: 'foo' } } -> { gameboard: { text: 'foo' } }
const removeBlanks = require('../../lib/remove_blank_fields')
// passing this as a second argument to `router.<verb>` will make it
// so that a token MUST be passed for that route to be available
// it will also set `req.user`
const requireToken = passport.authenticate('bearer', { session: false })

// instantiate a router (mini app that only handles routes)
const router = express.Router()

// CREATE
// POST /gameboards
router.post('/gameboards', requireToken, async (req, res, next) => {
  // set owner of new gameboard to be current user
  const user = req.user.id

  const gameboard = await gameboardService.createGameboardAsync(user)

  Gameboard.create(gameboard)
    // respond to succesful `create` with status 201 and JSON of new "gameboard"
    .then(gameboard => {
      res.status(201).json({ gameboard: gameboard.toObject() })
    })
    // if an error occurs, pass it off to our error handler
    // the error handler needs the error message and the `res` object so that it
    // can send an error message back to the client
    .catch(next)
})

// INDEX
// GET /gameboards
router.get('/gameboards', requireToken, (req, res, next) => {
  Gameboard.find({ owner: req.user })
    .populate('questions')
    .populate('responses')
    .exec((err, gameboards) => {
      if (err) {
        res.status(500).json({ err: err })
      }
      // `gameboards` will be an array of Mongoose documents
      // we want to convert each one to a POJO, so we use `.map` to
      // apply `.toObject` to each one
      const gameboardObjects = gameboards.map(gameboard => gameboard.toObject())
      res.status(200).json({ gameboards: gameboardObjects })
    })
    // respond with status 200 and JSON of the gameboards
    // if an error occurs, pass it to the handler
})

// SHOW
// GET /gameboards/5a7db6c74d55bc51bdf39793
router.get('/gameboards/:id', requireToken, (req, res, next) => {
  // req.params.id will be set based on the `:id` in the route
  Gameboard.findById(req.params.id)
    .populate('questions')
    .populate('responses')
    .exec((err, gameboard) => {
      if (err) {
        res.status(500).json({ err: err })
        return
      }
      // `gameboards` will be an array of Mongoose documents
      // we want to convert each one to a POJO, so we use `.map` to
      // apply `.toObject` to each one
      res.status(200).json({ gameboard: gameboard.toObject() })
    })
})

// UPDATE
// PATCH /gameboards/5a7db6c74d55bc51bdf39793
router.patch('/gameboards/:id', requireToken, removeBlanks, (req, res, next) => {
  // if the client attempts to change the `owner` property by including a new
  // owner, prevent that by deleting that key/value pair
  delete req.body.gameboard.owner

  Gameboard.findById(req.params.id)
    .then(handle404)
    .then(gameboard => {
      // pass the `req` object and the Mongoose record to `requireOwnership`
      // it will throw an error if the current user isn't the owner
      requireOwnership(req, gameboard)

      // pass the result of Mongoose's `.update` to the next `.then`
      return gameboard.updateOne(req.body.gameboard)
    })
    // if that succeeded, return 204 and no JSON
    .then((gameboard) => {
      Gameboard.findById(req.params.id)
        .populate('questions')
        .populate('responses')
        .exec((err, gameboard) => {
          if (err) {
            res.status(500).json({ err: err })
          }
          res.status(200).json({ gameboard: gameboard.toObject() })
        })
    })
    // if an error occurs, pass it to the handler
    .catch(next)
})

// DESTROY
// DELETE /gameboards/5a7db6c74d55bc51bdf39793
router.delete('/gameboards/:id', requireToken, (req, res, next) => {
  Gameboard.findById(req.params.id)
    .then(handle404)
    .then(gameboard => {
      // throw an error if current user doesn't own `gameboard`
      requireOwnership(req, gameboard)
      // delete the gameboard ONLY IF the above didn't throw
      gameboard.deleteOne()
    })
    // send back 204 and no content if the deletion succeeded
    .then(() => res.sendStatus(204))
    // if an error occurs, pass it to the handler
    .catch(next)
})

module.exports = router
