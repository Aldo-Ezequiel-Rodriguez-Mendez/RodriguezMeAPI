const http = require('http');

const servidor = http.createServer(function (req,res){
    res.end('Servidor HTTP de NoteJS respuesta');
})

servidor.listen(8083,()=>{console.log('Servidor en curso en el puerto 8083...')});

