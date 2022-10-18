let json2xls = require('json2xls')
let postgres = require('postgres')
let fs = require('fs')

let host='localhost'     
let port= 5432                    
let database='ejemplo'              
let username='postgres'            
let password='admin'                


const sql = postgres(`postgres://${username}:${password}@${host}:${port}/${database}`,{})

async function crearExcel() {
    const personas = await sql`SELECT * FROM persona`;
    var xls = json2xls(personas);
    fs.writeFileSync(`${__dirname}/excel/data.xlsx`, xls, 'binary');
}

crearExcel();