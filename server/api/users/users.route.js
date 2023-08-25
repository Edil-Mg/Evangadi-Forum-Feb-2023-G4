import express from 'express';
const usersRouter = express.Router();

usersRouter.get("/", (req, res) => { 
    res.send("userss");
});




export default usersRouter;