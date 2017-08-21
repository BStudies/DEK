const db = require('../db/config');

const Deck = {};



Deck.findByUserName = user_id =>{
    return db.one(`
        SELECT * FROM deck
        WHERE user_id = $7
    `,[user_id]);
}



Deck.create = deck =>{
    return db.one(`
        INSERT INTO deck
        (question, answer, correct, setTime, timesRight, timesWrong, user_id)
        VALUES
        ($1,$2,$3,$4,$5,$6,$7)
        RETURNING *
    `, [deck.question, deck.answer, deck.correct, deck.setTime, deck.timesRight, deck.timesWrong, deck.user_id]);
};



module.exports = User;

