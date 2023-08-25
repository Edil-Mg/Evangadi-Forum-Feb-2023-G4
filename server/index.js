import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import {connection} from './config/db.js'
import './config/install.js'

// config .env
dotenv.config();
const port = process.env.SERVER_PORT;
const host = process.env.SERVER_HOST;



const server = express();

server.get('/', (req, res) => { 
    res.send(`<h1>working ... </h1>`);
});




server.listen(port, host, (error) => { 
    if (error) console.log(error);
    console.log(`http://${host}:${[port]}`);
});
