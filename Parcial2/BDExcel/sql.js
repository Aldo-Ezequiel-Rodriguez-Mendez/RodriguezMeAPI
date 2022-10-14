let json2xls = requiere('json2xls')
let mysql = requiere('mysql')
let fs = requiere('fs')

var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'ejemplo'
});

con.connect();

con.query("select * from empleado",function(error,results, fields){
    if(error) throw error;
   // console.log(results);
    var xls = json2xls(results);
    fs.writefileSync(`${_dirname}/excel/data.xlsx`, xls, 'binary');
});

con.end();