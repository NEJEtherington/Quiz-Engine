DROP DATABASE IF EXISTS quiz_engine;
CREATE DATABASE quiz_engine;

\c quiz_engine;

CREATE TABLE users
(
  user_id SERIAL PRIMARY KEY,
  username VARCHAR(50) NOT NULL,
  email_address VARCHAR(200) NOT NULL
);

INSERT INTO users
  (username, email_address)
VALUES
  ('quizmaster', 'quizzee@quiz.quiz');

CREATE TABLE quizzes
(
  quiz_id SERIAL PRIMARY KEY,
  quiz_title VARCHAR NOT NULL,
  published BOOLEAN DEFAULT FALSE,
  times_quiz_taken INT DEFAULT 0,
  -- the total number of users who have completed the quiz in order to calculate averages
  bracket_1 INT DEFAULT 0,
  bracket_2 INT DEFAULT 0,
  bracket_3 INT DEFAULT 0,
  bracket_4 INT DEFAULT 0,
  bracket_5 INT DEFAULT 0,
  bracket_6 INT DEFAULT 0,
  bracket_7 INT DEFAULT 0,
  bracket_8 INT DEFAULT 0,
  bracket_9 INT DEFAULT 0,
  bracket_10 INT DEFAULT 0
  -- the total number of users scoring in each 10% bracket
);

INSERT INTO quizzes
  (quiz_title)
VALUES
  ('Simple arithmetics');


CREATE TABLE questions
(
  question_id SERIAL PRIMARY KEY,
  FOREIGN KEY (quiz_id) REFERENCES quizzes(quiz_id),
  question_text VARCHAR NOT NULL,
  answer_1 VARCHAR NOT NULL,
  answer_2 VARCHAR NOT NULL,
  answer_3 VARCHAR NOT NULL,
  answer_4 VARCHAR NOT NULL,
  correct_answer VARCHAR NOT NULL
);

INSERT INTO questions
  (quiz_id, question_text, answer_1, answer_2, answer_3, answer_4, correct_answer)
VALUES
  (1, 'What is the sum of 16 and 18', '24', '34', '32', '2', 'answer_2'),
  (1, 'What is the product of 12 and 11', '132', '121', '144', '120', 'answer_1');

CREATE TABLE quizz_to_user
(
  FOREIGN KEY (user_id) REFERENCES users(user_id),
  FOREIGN KEY (quiz_id) REFERENCES quizzes(quiz_id),
  FOREIGN KEY (question_id) REFERENCES questions(question_id),
  answer_selected VARCHAR
);