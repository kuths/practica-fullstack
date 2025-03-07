import { Schema, model } from "mongoose";

let collection = 'Plane';
let schema = Schema({
    name: { type: String, required: true },
    model: { type: String, required: true },
    engineType: { type: String, required: true },
    capacity: { type: Number, required: true },
    range: { type: Number, required: true },
    color: { type: String, required: true }
}, {
    timestamps: true
});

let Plane = model(collection, schema);

export default Plane;
