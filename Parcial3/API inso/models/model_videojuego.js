const mongoose = require("mongoose"); //import mongoose

// Videojuego esquema (schema)
const VideojuegoSchema = new mongoose.Schema({
    id: {type:String, required:true},
    descripcion: String,
    comentarios : [{
        texto: String, 
        fecha: {type:String, default: new Date()}}]
},{
    versionKey: false // Quitamos esto que no es necesario
});

const Videojuego = mongoose.model('Videojuego', VideojuegoSchema); //convert to model named Videojuego
module.exports = Videojuego; //export for controller use
