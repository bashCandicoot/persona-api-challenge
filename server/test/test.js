const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../src/app');

const should = chai.should();
chai.use(chaiHttp);

describe('/GET people', () => {
  it('it should GET all the people', (done) => {
    chai.request(app)
      .get('/people')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('array');
        // res.body.length.should.be.eql(0);
        done();
      });
  });
});

