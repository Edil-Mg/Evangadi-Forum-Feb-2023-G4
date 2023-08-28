import express from 'express';
import questionController from './questions.controller.js';
const questionsRouter = express.Router();

questionsRouter.get("/", (req, res) => { 
    res.send("questions");
});
questionsRouter.post('/createQuestion',questionController.createQuestion )


export default questionsRouter;