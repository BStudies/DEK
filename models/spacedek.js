const db = require('../db/config');

const Space = {};

// The space deck will be available storage for all the cards
// the user got right. It is governed by functionality that holds
// the cards and merges the cards once the time has come

Space.findByUserName = question =>{
    return db.one(`
        SELECT * FROM routinedek
        WHERE question = $1
    `,[question]);
}



Space.update = space =>{
    return db.one(`
        INSERT INTO spacedek
        (question, answer)
        VALUES
        ($1,$2)
        RETURNING *
    `, [space.question, space.answer]);
};



module.exports = Space;
