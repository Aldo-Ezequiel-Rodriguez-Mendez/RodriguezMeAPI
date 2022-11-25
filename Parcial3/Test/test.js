let chai = require('chai');
let chaiHttp = require('chai-http');
const expect = require('chai').expect;
chai.use(chaiHttp);
const url= 'http://localhost:8080';

describe('Obtiene personas: ',()=>{ 
    it('Deberia obtener todas las personas', (done) => {
        chai.request(url) 
            .get('/persona')
            .send()
            .end( function(err,res){
                expect(res).to.have.status(200);
                expect(res).to.be.json;
                done();
            });
    });
}); 