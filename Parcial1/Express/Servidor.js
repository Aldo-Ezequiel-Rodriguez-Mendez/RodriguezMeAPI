const express = require('express');
const app = express();

app.get('/',(req, res) =>{
    res.send('servidor Express en funcion')
});

app.post('/',(req, res) =>{
    res.send('Post hecho con el servidor Express')
});

app.listen(3000, () =>{
    console.log('servidor express escuchando en puerto 3000')
});