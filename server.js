import express from "express";
import 'dotenv/config.js'
import './config/database.js'

const server = express();
const PORT = 8080;
const ready = () => console.log("server ready: " + PORT);
server.get("/",(request,response) => {
    response('hola')
})
server.listen(PORT, ready);
