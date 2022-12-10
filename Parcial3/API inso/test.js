let chai = require('chai');
let chaiHttp = require('chai-http');
const expect = require('chai').expect;
chai.use(chaiHttp);
const url= 'http://localhost:8080';

//GET todos los videojuegos
describe('Obtiene videojuegos: ',()=>{ 
    it('Deberia obtener todos los videojuegos', (done) => {
        chai.request(url) 
            .get('/videojuego')
            .send()
            .end( function(err,res){
                expect(res).to.have.status(200);
                expect(res).to.be.json;
                done();
            });
    });
}); 

//GET solo 1 videojuego
describe('Obtiene un solo videojuego: ',()=>{ 
    it('Deberia obtener solo un videojuego mediante su ID', (done) => {
        chai.request(url) 
            .get('/videojuego')
            .send({id:"6"})
            .end( function(err,res){
                expect(res).to.have.status(200);
                expect(res).to.be.json;
                done();
            });
    });
}); 

//POST insertar un videojuego
describe('Inserta un videojuego: ',()=>{ 
    it('Deberia de insertar un nuevo videojuego', (done) => {
        chai.request(url) 
            .post('/videojuego')
            .send({id:"6", nombre:"Videojuego nuevo", descripcion:"Descripcion videojuego"})
            .end( function(err,res){
                expect(res).to.have.status(200);
                expect(res).to.be.json;
                done();
            });
    });
}); 

//POST actualizar comentarios en un videojuego
describe('Actualizar comentarios de un videojuego: ',()=>{ 
    it('Deberia de actualizar los comentarios de un nuevo videojuego', (done) => {
        chai.request(url) 
            .post('/videojuego')
            .send({id:"6", comentarios:"Nuevo comentario al videojuego"})
            .end( function(err,res){
                expect(res).to.have.status(200);
                expect(res).to.be.json;
                done();
            });
    });
}); 

//DELETE eliminar un solo videojuego
describe('Eliminar un solo videojuego: ',()=>{ 
    it('Deberia de eliminar solo un videojuego mediante su ID', (done) => {
        chai.request(url) 
            .post('/videojuego')
            .send({id:"6"})
            .end( function(err,res){
                expect(res).to.have.status(200);
                expect(res).to.be.json;
                done();
            });
    });
}); 