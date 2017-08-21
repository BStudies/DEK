const Space = require('../models/spacedek.js');
const routineController = {};






routineController.update = (req, res) => {
    Space.create({
        question: req.body.question,
        answer: req.body.answer,
    })
    .then(space => {
        console.log(`Created ${space} in space-cont`)
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({error: err});
    })
}
