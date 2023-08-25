export default {
  registrationTableCreate: `CREATE TABLE if not exists registration (
    user_id INT AUTO_INCREMENT not null,
    user_name VARCHAR(255) NOT NULL,
    user_email VARCHAR(255) NOT NULL,
    user_password VARCHAR(255) NOT NULL,
    PRIMARY KEY (user_id),
    UNIQUE KEY (user_name),
    UNIQUE KEY (user_email)
  )`,
  profileTableCreate: `CREATE TABLE if not exists profile (
    user_profile_id INT AUTO_INCREMENT not null,
    user_id INT not null,
    first_name VARCHAR(255) not null,
    middle_name VARCHAR(255) not null,
    last_name VARCHAR(255) not null,  
	other_name VARCHAR(255) not null, 
    image_url VARCHAR(255),  
    PRIMARY KEY (user_profile_id),
    FOREIGN KEY (user_id) REFERENCES registration(user_id)
  )`,
  addressTableCreate: `CREATE TABLE if not exists address (
    user_address_id INT AUTO_INCREMENT not null,
    user_id INT not null,
    country VARCHAR(255) not null,
    state VARCHAR(255) not null,  
    city VARCHAR(255) not null,       
    PRIMARY KEY (user_address_id),
    FOREIGN KEY (user_id) REFERENCES registration(user_id)
  )`,
  questionTableCreate: `CREATE TABLE if not exists question (
    question_id INT AUTO_INCREMENT not null,
    question TEXT not null,
    question_description TEXT,
    category VARCHAR(255),
    user_id INT not null,
    PRIMARY KEY (question_id),
    FOREIGN KEY (user_id) REFERENCES registration(user_id)
  )`,
  answerTableCreate: `CREATE TABLE if not exists answer (
    answer_id INT AUTO_INCREMENT not null,
    answer TEXT not null,
    user_id INT not null,
    question_id INT not null,
    PRIMARY KEY (answer_id),
    FOREIGN KEY (user_id) REFERENCES registration(user_id),
    FOREIGN KEY (question_id) REFERENCES question(question_id)
  )`,
  replayTableCreate: `CREATE TABLE if not exists replay (
    replay_id INT AUTO_INCREMENT not null,
    replay TEXT not null,
    user_id INT not null,
    answer_id INT not null,
    PRIMARY KEY (replay_id),
    FOREIGN KEY (user_id) REFERENCES registration(user_id),
    FOREIGN KEY (answer_id) REFERENCES answer(answer_id)
  )`,
  getAllUsers: `select * from users`,
  getAllEmail: `select email from users`,
  getAllUsername: `select username from users`,
  getAllAnswer: `select * from answer`,
  getAllQuestion: `select * from question`,



};