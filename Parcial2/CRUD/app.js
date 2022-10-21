let postgres = require('postgres')
let express = require('express')

let host='localhost';
let port= 5432;              
let database='ejemplo';            
let username='postgres';         
let password='admin';    

const sql = postgres(`postgres://${username}:${password}@${host}:${port}/${database}`,{});

const app = express();
app.use(express.json());
app.use(express.text());

app.get('/ConsultarPersona',async function(req,res){
    try{
        const personas = await sql`SELECT * FROM persona`;
        res.send(personas);
    }catch (error){
        res.send(error)
    }
})
app.get('/ConsultarPersona/:id',async function(req,res){
    try {
        console.log(req.params.id)
        const persona = await sql`SELECT * FROM persona WHERE id = ${req.params.id}`;
        if(persona === null || persona === undefined){
            res.send("No se encontró una persona con el ID ingresado")
        }else{
            res.send(persona)
        }; 
    } catch (error) {
        res.send(error)
    }
})

app.post('/AgregarPersona',async function(req, res){
    try {
        const personas = await sql`INSERT INTO persona (nombre, correo) values 
                    (${req.body.nombre}, ${req.body.correo})`;

        if(personas === null || personas === undefined){
            res.send("No se agregó la persona... ha ocurrido un error :(")
        }else{
            res.send(`Se ha agregado la nueva persona  ${req.body.nombre} con su correo ${req.body.correo}`);
        }; 
    } catch (error) {
        res.send(error)
    }
});

app.put('/ModificarPersona/',async function(req, res){
    const personas = await sql`UPDATE persona set nombre = ${req.body.nombre}, 
                    correo = ${req.body.correo} WHERE id = ${req.body.id}`;

        res.send(`Se ha actualizado la persona con id: ${req.body.id}`);   
});

app.delete('/BorrarPersona/:id',async function(req, res){
    const personas = await sql`DELETE FROM persona WHERE id = ${req.params.id}`;
    res.send(`Se ha eliminado la persona con id: ${req.params.id}`);
});

app.listen(8081,() => {
    console.log('Servidor Express escuchando en el puerto 8081');
});
