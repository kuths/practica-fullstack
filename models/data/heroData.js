import 'dotenv/config.js'
import "../../config/database.js"
import Hero from '../Hero.js'

let heroes = [
    { name: "Thor", power: "Lightning", genero: "Masculino" },
    { name: "Wonder Woman", power: "Super fuerza", genero: "Femenino" },
    { name: "Spider-Man", power: "Trepar muros", genero: "Masculino" },
    { name: "Storm", power: "Control del clima", genero: "Femenino" },
    { name: "Iron Man", power: "Tecnología avanzada", genero: "Masculino" },
    { name: "Jean Grey", power: "Telequinesis", genero: "Femenino" },
    { name: "Hulk", power: "Fuerza descomunal", genero: "Masculino" },
    { name: "Rogue", power: "Absorber poderes", genero: "Femenino" },
    { name: "Black Panther", power: "Habilidades felinas", genero: "Masculino" },
    { name: "Captain Marvel", power: "Energía cósmica", genero: "Femenino" },
    { name: "Doctor Strange", power: "Magia", genero: "Masculino" },
    { name: "Scarlet Witch", power: "Manipulación de la realidad", genero: "Femenino" },
    { name: "Flash", power: "Super velocidad", genero: "Masculino" },
    { name: "Supergirl", power: "Poderes kryptonianos", genero: "Femenino" },
    { name: "Aquaman", power: "Control del agua", genero: "Masculino" }
];

Hero.insertMany(heroes)