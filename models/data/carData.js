import 'dotenv/config.js'
import "../../config/database.js"
import Car from '../Car.js'

const cars = [
    { name: "Toyota", model: "Corolla", cc: 1800, color: "Blanco", seating: 5 },
    { name: "Honda", model: "Civic", cc: 2000, color: "Negro", seating: 5 },
    { name: "Ford", model: "Mustang", cc: 5000, color: "Rojo", seating: 4 },
    { name: "Chevrolet", model: "Camaro", cc: 6200, color: "Amarillo", seating: 4 },
    { name: "Nissan", model: "Altima", cc: 2500, color: "Azul", seating: 5 },
    { name: "BMW", model: "M3", cc: 3000, color: "Gris", seating: 5 },
    { name: "Mercedes-Benz", model: "C-Class", cc: 2000, color: "Plateado", seating: 5 },
    { name: "Audi", model: "A4", cc: 2000, color: "Blanco", seating: 5 },
    { name: "Volkswagen", model: "Golf GTI", cc: 2000, color: "Verde", seating: 5 },
    { name: "Hyundai", model: "Elantra", cc: 1600, color: "Negro", seating: 5 },
    { name: "Kia", model: "Stinger", cc: 3300, color: "Rojo", seating: 5 },
    { name: "Subaru", model: "WRX", cc: 2500, color: "Azul", seating: 5 },
    { name: "Mazda", model: "MX-5 Miata", cc: 2000, color: "Rojo", seating: 2 },
    { name: "Dodge", model: "Charger", cc: 5700, color: "Negro", seating: 5 },
    { name: "Lexus", model: "IS 350", cc: 3500, color: "Blanco", seating: 5 }
  ];
  
  Car.insertMany(cars)
