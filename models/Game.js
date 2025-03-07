import { Schema, model } from "mongoose";

let collection = 'Game';
let schema = Schema({
    title: { type: String, required: true },
    genre: { type: String, required: true },
    platform: { type: String, required: true },
    developer: { type: String, required: true },
    releaseYear: { type: Number, required: true },
    rating: { type: Number, required: true },
    multiplayer: { type: Boolean, required: true }
}, {
    timestamps: true
});

let Game = model(collection, schema);

export default Game;