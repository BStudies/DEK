const Deck = require('../models/deck.js');
const deckController = {};

routineController.create = (req, res) => {
    Deck.create({
        question: req.body.question,
        answer: req.body.answer,
    })
    .then(decks => {
        console.log(`Created ${decks} in decks-cont`)
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({error: err});
    })
}
