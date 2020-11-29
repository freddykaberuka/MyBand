import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../index';
chai.should();
chai.use(chaiHttp)
describe('TEST signup API',()=>{
  //should save a new user
  it("should signup new user", (done) => {
    const signup = {
        email: "fredy@gmail.com",
      password: "11111111",
    };
    chai
      .request(app)
      .post('/api/v1/user/signup')
      .send(signup)
      .end((err, res) => {
        if (err) done(err);
            res.should.have.status(201);
            //res.should.have.property('message');
            done();
      });
  });
  //trying to duplicate error
   //should not save new user
   it("should not signup new user", (done) => {
    const signup = {
      email: "fred@gmail.com",
      password: "11111111",
    };
    chai
      .request(app)
      .post('/api/v1/user/signup')
      .send(signup)
      .end((err, res) => {
        if (err) done(err);
            res.should.have.status(409);
            //res.should.have.property('message');
            done();
      });
  });
    //should not save new user
    //once you input wrong URL
    it("should not signup new user", (done) => {
        const signup = {
          email: "fred@gmail.com",
          password: "11111111",
        };
        chai
          .request(app)
          .post('/api/v1/user/contact')
          .send(signup)
          .end((err, res) => {
            if (err) done(err);
                res.should.have.status(404);
                //res.should.have.property('message');
                done();
          });
      });
});