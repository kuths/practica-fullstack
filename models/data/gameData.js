import 'dotenv/config.js';
import "../../config/database.js";
import Game from '../Game.js';

let games = [
    { title: "The Legend of Zelda: Breath of the Wild", genre: "Aventura", platform: "Nintendo Switch", developer: "Nintendo", releaseYear: 2017, rating: 9.8, multiplayer: false },
    { title: "God of War", genre: "Acción", platform: "PlayStation", developer: "Santa Monica Studio", releaseYear: 2018, rating: 9.6, multiplayer: false },
    { title: "Red Dead Redemption 2", genre: "Mundo abierto", platform: "PS4/Xbox/PC", developer: "Rockstar Games", releaseYear: 2018, rating: 9.7, multiplayer: true },
    { title: "Elden Ring", genre: "RPG", platform: "PS5/Xbox/PC", developer: "FromSoftware", releaseYear: 2022, rating: 9.5, multiplayer: true },
    { title: "Minecraft", genre: "Sandbox", platform: "Multiplataforma", developer: "Mojang", releaseYear: 2011, rating: 9.3, multiplayer: true },
    { title: "Cyberpunk 2077", genre: "RPG", platform: "PS5/Xbox/PC", developer: "CD Projekt Red", releaseYear: 2020, rating: 8.5, multiplayer: false },
    { title: "Grand Theft Auto V", genre: "Acción", platform: "PS4/Xbox/PC", developer: "Rockstar Games", releaseYear: 2013, rating: 9.5, multiplayer: true },
    { title: "Super Mario Odyssey", genre: "Plataformas", platform: "Nintendo Switch", developer: "Nintendo", releaseYear: 2017, rating: 9.7, multiplayer: false },
    { title: "The Witcher 3: Wild Hunt", genre: "RPG", platform: "PS4/Xbox/PC", developer: "CD Projekt Red", releaseYear: 2015, rating: 9.8, multiplayer: false },
    { title: "Dark Souls III", genre: "RPG", platform: "PS4/Xbox/PC", developer: "FromSoftware", releaseYear: 2016, rating: 9.4, multiplayer: true },
    { title: "Horizon Zero Dawn", genre: "Acción", platform: "PS4/PC", developer: "Guerrilla Games", releaseYear: 2017, rating: 9.2, multiplayer: false },
    { title: "Call of Duty: Modern Warfare II", genre: "FPS", platform: "Multiplataforma", developer: "Infinity Ward", releaseYear: 2022, rating: 8.9, multiplayer: true },
    { title: "Fortnite", genre: "Battle Royale", platform: "Multiplataforma", developer: "Epic Games", releaseYear: 2017, rating: 8.5, multiplayer: true },
    { title: "Resident Evil 4 Remake", genre: "Survival Horror", platform: "Multiplataforma", developer: "Capcom", releaseYear: 2023, rating: 9.6, multiplayer: false },
    { title: "FIFA 23", genre: "Deportes", platform: "Multiplataforma", developer: "EA Sports", releaseYear: 2022, rating: 8.2, multiplayer: true }
];

Game.insertMany(games)
