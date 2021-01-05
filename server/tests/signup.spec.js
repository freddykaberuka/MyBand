import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../index';

chai.should();
chai.use(chaiHttp);
describe('TEST signup API', () => {
  // should save a new user
  it("should signup new user", (done) => {
    const signup = {
        email: "freda@gmail.com",
      password: "11111111",
    };
    chai
      .request(app)
      .post('/api/v1/user/signup')
      .send(signup)
      .end((err, res) => {
        if (err) done(err);
            res.should.have.status(201);
            // res.should.have.property('message');
            done();
      });
  });
  // trying to duplicate error
   // should not save new user
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
            // res.should.have.property('message');
            done();
      });
  });
    // should not save new user
    // once you input wrong URL
    it("should not signup, user exist", (done) => {
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
                // res.should.have.property('message');
                done();
          });
      });
});
describe('TEST Signin API', () => {
    // should allow to login to the user
    it("should signin user", (done) => {
      const login = {
          email: "fredy@gmail.com",
        password: "11111111",
      };
      chai
        .request(app)
        .post('/api/v1/user/login')
        .send(login)
        .end((err, res) => {
          if (err) done(err);
              res.should.have.status(200);
              res.should.have.a('object');
              done();
        });
    });
        // should not login
        it("should not signin user", (done) => {
            const login = {
                email: "fre@gmail.com",
              password: "11111111",
            };
            chai
              .request(app)
              .post('/api/v1/user/login')
              .send(login)
              .end((err, res) => {
                if (err) done(err);
                    res.should.have.status(401);
                    res.should.have.a('object');
                    done();
              });
          });
          
});
