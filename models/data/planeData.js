import 'dotenv/config.js';
import "../../config/database.js";
import Plane from '../Plane.js';

let planes = [
    { name: "Boeing", model: "747", engineType: "Jet", capacity: 660, range: 14815, color: "Blanco" },
    { name: "Airbus", model: "A380", engineType: "Jet", capacity: 850, range: 15200, color: "Blanco" },
    { name: "Cessna", model: "172", engineType: "Pistón", capacity: 4, range: 1289, color: "Azul" },
    { name: "Embraer", model: "E195", engineType: "Turbofan", capacity: 132, range: 4260, color: "Gris" },
    { name: "Bombardier", model: "Global 7500", engineType: "Turbofan", capacity: 19, range: 14260, color: "Negro" },
    { name: "Gulfstream", model: "G650", engineType: "Turbofan", capacity: 18, range: 12960, color: "Gris" },
    { name: "Lockheed Martin", model: "C-130 Hercules", engineType: "Turbohélice", capacity: 92, range: 3800, color: "Verde militar" },
    { name: "Boeing", model: "737", engineType: "Jet", capacity: 215, range: 6570, color: "Blanco/Azul" },
    { name: "Airbus", model: "A320", engineType: "Jet", capacity: 180, range: 6150, color: "Blanco/Rojo" },
    { name: "Antonov", model: "An-225", engineType: "Jet", capacity: 250, range: 15400, color: "Blanco" },
    { name: "Dassault", model: "Falcon 7X", engineType: "Turbofan", capacity: 16, range: 11000, color: "Gris/Negro" },
    { name: "Beechcraft", model: "King Air 350", engineType: "Turbohélice", capacity: 11, range: 3339, color: "Azul/Blanco" },
    { name: "Sukhoi", model: "Superjet 100", engineType: "Jet", capacity: 98, range: 4578, color: "Blanco/Azul" },
    { name: "McDonnell Douglas", model: "MD-11", engineType: "Jet", capacity: 293, range: 12555, color: "Blanco/Gris" },
    { name: "Pilatus", model: "PC-24", engineType: "Jet", capacity: 11, range: 3700, color: "Negro/Plata" }
];

Plane.insertMany(planes)