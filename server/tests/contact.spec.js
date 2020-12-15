import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../index';

chai.should();
chai.use(chaiHttp);
describe('TEST Contact API', () => {
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImtuaWZlQGdtYWlsLmNvbSIsInVzZXJJZCI6IjVmZjA2ODFhZDc2Y2JiNmRiZmVkMWVhZCIsImlhdCI6MTYwOTY4NzM0NiwiZXhwIjoxNjEwMjkyMTQ2fQ.msXjKKRDeKdPDXKTuzn-WcCTmA_cWnRnq7XCuEePofE";
// get all queries or message with authorization
    it('should GET all Querries', (done) => {
        chai.request(app)
            .get('/api/v1/contacts')
            .set('Authorization', `Bearer ${token}`)
            .end((err, res) => {
                res.should.have.status(200);
                res.should.be.an('object');
                done();
            });
    });
// get all queries or message without authorization
    it('should GET all Querries', (done) => {
        chai.request(app)
            .get('/api/v1/contacts')
            .set('Authorization', `Bearer ${token}`)
            .end((err, res) => {
                res.should.have.status(200);
                res.should.be.an('object');
                done();
            });
    });
    // select one query with Authorization
    it('should GET one Query', (done) => {
        const contactid = '5fc113745d309bd3a8fbe001';
        chai.request(app)
            .get(`/api/v1/contacts/${contactid}`)
            .set('Authorization', `Bearer ${token}`)
            .end((err, res) => {
                res.should.have.status(200);
                res.should.be.an('object');
                done();
            });
    });
    // select one query without Authorization
    it('should not GET one Query', (done) => {
        const contactid = '5fc113745d309bd3a8fbe001';
        chai.request(app)
            .get(`/api/v1/contacts/${contactid}`)
            .end((err, res) => {
                res.should.have.status(401);
                res.should.be.an('object');
                done();
            });
    });
    // should send a message
    it("should send message Successfully", (done) => {
        const message = {
          name: "navy troj",
          email: "navytroj@gmail.com",
          subject: "Hi there",
          comment: "testing from mocha",
        };
        chai
          .request(app)
          .post('/api/v1/contacts')
          .send(message)
          .end((err, res) => {
            if (err) done(err);
                res.should.have.status(201);
                done();
          });
      });
     // should not send a message emmail formarted badly
    it("should not send message Successfully", (done) => {
        const message = {
          name: "navy trojan",
          email: "navytroj",
          subject: "Hi there",
          comment: "testing from mocha",
        };
        chai
          .request(app)
          .post('/api/v1/contacts')
          .send(message)
          .end((err, res) => {
            if (err) done(err);
                res.should.have.status(500);
                done();
          });
      });
      it('should DELETE one Query', (done) => {
        const contactidd = '5fc3749a78c8840e6f396be2';
        chai.request(app)
            .delete(`/api/v1/contacts/${contactidd}`)
            .set('Authorization', `Bearer ${token}`)
            .end((err, res) => {
                res.should.have.status(200);
                res.should.be.an('object');
                done();
            });
    });
});
