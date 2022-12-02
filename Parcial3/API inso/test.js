let chai = require('chai');
let chaiHttp = require('chai-http');
const expect = require('chai').expect;
chai.use(chaiHttp);
const url= 'https://api-videojuegos-aldo.herokuapp.com';

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