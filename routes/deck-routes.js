const express = require('express');
const deckRoutes = express.Router();
const decksController = require('../controllers/decks-controller.js')


deckRoutes.get('/', decksController.index)
deckRoutes.post('/', decksController.create)
deckRoutes.get('/:id', decksController.)
deckRoutes.put('/:id', decksController.)



module.exports = deckRoutes;

