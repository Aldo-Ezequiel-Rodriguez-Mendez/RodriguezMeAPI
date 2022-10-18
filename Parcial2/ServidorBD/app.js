let postgres = require('postgres')
let express = require('express')

let host='localhost'     
let port= 5432                    
let database='ejemplo'              
let username='postgres'            
let password='admin'                

const sql = postgres(`postgres://${username}:${password}@${host}:${port}/${database}`,{})

const app = express();
app.use(express.json());
app.use(express.text());

app.get('/',async function(req,res){
    const personas = await sql`SELECT * FROM persona`;
    res.send(personas);
})
