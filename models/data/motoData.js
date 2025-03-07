import 'dotenv/config.js'
import "../../config/database.js"
import Moto from '../Moto.js'

const motos = [
    { name: "Yamaha", model: "YZF-R1", cc: 1000, color: "Azul" },
    { name: "Honda", model: "CBR600RR", cc: 600, color: "Rojo" },
    { name: "Kawasaki", model: "Ninja 400", cc: 400, color: "Verde" },
    { name: "Ducati", model: "Panigale V4", cc: 1103, color: "Rojo" },
    { name: "Suzuki", model: "GSX-R750", cc: 750, color: "Azul" },
    { name: "BMW", model: "S1000RR", cc: 999, color: "Blanco" },
    { name: "Harley-Davidson", model: "Iron 883", cc: 883, color: "Negro" },
    { name: "Triumph", model: "Street Triple", cc: 765, color: "Gris" },
    { name: "Aprilia", model: "RS 660", cc: 660, color: "Rojo" },
    { name: "KTM", model: "Duke 390", cc: 373, color: "Naranja" },
    { name: "Royal Enfield", model: "Interceptor 650", cc: 648, color: "Negro" },
    { name: "MV Agusta", model: "F3 800", cc: 798, color: "Rojo/Plata" },
    { name: "Benelli", model: "TNT 600", cc: 600, color: "Verde" },
    { name: "Moto Guzzi", model: "V7 Stone", cc: 744, color: "Negro" },
    { name: "Husqvarna", model: "Vitpilen 401", cc: 373, color: "Blanco" }
  ];
  
Moto.insertMany(motos)