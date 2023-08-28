import { connection} from '../../config/db.js'
//question, catagory,questionDescription, id 
const questionService = {
    addNewQuestion: (data, callback) => {
   // console.log(data);
    connection.query(
    `INSERT INTO question (question, question_description, category, user_id, inserted_datetime)
    VALUES (?, ?, ?, ?, CURRENT_TIMESTAMP)`,
    [
        data.question,
        data.questionDescription,
        data.catagory,
        data.user_id
    ],
    (err, result) => {
        if (err) {
            return callback(err);
        }
        return callback(null, result);
    }
    );
  
    }, 
    getAllQuestions: (callback) => {
    connection.query(`SELECT registration.user_name, question,question_description,question_code_block,tags,post_id FROM question JOIN registration ON question.user_id = registration.user_id  ORDER BY question_id DESC`, [], (err, result) => {
        if (err) {
            return callback(err);
        }
        return callback(null, result);
        })
        },
    questionById: (id, callback) => {
        //id is postId
        connection.query(`SELECT * FROM question WHERE post_id = ?`, [id], (err, result) => {
            if (err) {
                return callback(err);
            }
            return callback(null, result[0]);
        })
    }
}

export default questionService;