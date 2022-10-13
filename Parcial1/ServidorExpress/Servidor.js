const express = require("express");
const cors = require("cors");
const app = express();
const cadena = require("./moduloCadenas")
app.use(cors({origin:"http://localhost"}))

var fs = require('fs');
var morgan = require('morgan');
var path = require('path');
app.use(express.text())
app.use(express.json())

// create a write stream (in append mode)
var accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' })

// setup the logger
app.use(morgan('combined', { stream: accessLogStream }))

app.use((req,res,next)=>{
    console.log('Primer funcion middleware');
    next();
},(req,res,next)=>{
    console.log("Segunda funcion middleware");
    next();
})

app.get("/",(req, res) =>{
    res.sendFile('./Static/Static.HTML',{root:__dirname},(err)=>{console.log("archivo enviado")});
});

app.post('/texto',(req, res) =>{
    //res.json({usuario:'Aldo'});

    let may = cadena.pasarMayusculas(req.body);
    let sinesp = cadena.quitarEspacios(req.body);
    let longi =  cadena.obtenerLongitud(req.body);

    // console.log(req.body)
    // let may = req.body.toUpperCase()
    // let sinesp = req.body.trim()
    // let longi = req.body.length
    res.json(
            {mayusculas: may,
            sinespacios: sinesp,
            longitud: longi
            })
});

app.post('/json',(req, res) =>{
    //res.json({usuario:'Aldo'});
    console.log(req.body.nombre)
    let cadena = "hola " + req.body.nombre+ " "+req.body.apellido+" como estas?"
    res.json({saludo:cadena})
});

app.get("/mayusculas/:cadena",(req, res) =>{
    console.log(req.params)
    res.send(req.params)
});

app.listen(8081, () => {
    console.log("servidor express escuchando en puerto 8081");
    console.log(__dirname);
    console.log(__filename);
});

app.get("/suma",(req, res) =>{
    console.log(req.query)
    let suma = parseInt(req.query.x)+parseInt(req.query.y)
    res.send(`la suma es ${suma}`)
});

app.use((req, res) =>{
    res.status(404).sendFile('./Static/404.HTML',{root:__dirname});
});

