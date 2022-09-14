const express = require('express');
const app = express();

app.get('/',(req, res) =>{
    res.send('servidor Express en funcion')
});

app.post('/',(req, res) =>{
    res.send('Post hecho con el servidor Express')
});

app.listen(8081, (req,res) =>{
    console.log('servidor express escuchando en puerto 8081')
});