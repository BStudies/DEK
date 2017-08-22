
DROP TABLE IF EXISTS users;
CREATE TABLE users(
    id BIGSERIAL PRIMARY KEY,
    username VARCHAR UNIQUE NOT NULL,
    email VARCHAR UNIQUE NOT NULL,
    password_digest TEXT NOT NULL,
    firstname VARCHAR,
    lastname VARCHAR
);

<<<<<<< HEAD
-- DROP TABLE IF EXISTS routinedek;
-- CREATE TABLE routinedek(
--     id BIGSERIAL PRIMARY KEY,
--     question VARCHAR (255),
--     answer VARCHAR (255),
--     user_id REFERENCES users(id)
-- )

-- DROP TABLE IF EXISTS spacedek;
-- CREATE TABLE spacedek(
--     id BIGSERIAL PRIMARY KEY,
--     question VARCHAR (255),
--     answer VARCHAR (255),
--     routinedek REFERENCES routinedek(id)
-- )

=======
DROP TABLE IF EXISTS deck;
CREATE TABLE deck(
    id BIGSERIAL PRIMARY KEY,
    question VARCHAR (255),
    answer VARCHAR (255),
    correct VARCHAR (255),
    setTime VARCHAR UNIQUE NOT NULL,
    timesRight VARCHAR UNIQUE NOT NULL,
    timesWrong VARCHAR UNIQUE NOT NULL,
    user_id INT REFERENCES users(id),
    deckNumber INT NOT NULL
)

>>>>>>> b9ea8a9da1731b84d0b1a0a3205480d12996c44e

