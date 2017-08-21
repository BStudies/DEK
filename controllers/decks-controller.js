const Card = require('../models/deck.js');
const deckController = {};

deckController.create = (req, res) => {
    Card.create({
        user_id: req.body.user_id,
        question: req.body.question,
        answer: req.body.answer,
        correct: req.body.correct,
        setTime: req.body.time,
        timesRight: req.body.timesRight,
        timesWrong: req.body.timesWrong,
    })
    .then(card => {
        console.log(`Created ${card} in decks-controller`)
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({error: err});
    })
}

deckController.update = (res, res) => {
    Card.update({
        user_id: req.body.user_id,
        question: req.body.question,
        answer: req.body.answer,
        correct: req.body.correct,
        setTime: req.body.time,
        timesRight: req.body.timesRight,
        timesWrong: req.body.timesWrong,
    }, req.params.id)
    .then(card => {
        console.log(`Updated ${card} in decks-controller`)
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({error: err});
    })
}


deckController.destroy = (req, res) => {
    Card.delete({

    })
    .then(card => {
        console.log('We deleted ${card}')
    })
}
