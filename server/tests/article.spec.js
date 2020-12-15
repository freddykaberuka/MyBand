import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../index';

chai.should();
chai.use(chaiHttp);
describe('TEST Articles API', () => {
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImtuaWZlQGdtYWlsLmNvbSIsInVzZXJJZCI6IjVmZjA2ODFhZDc2Y2JiNmRiZmVkMWVhZCIsImlhdCI6MTYwOTY4NzM0NiwiZXhwIjoxNjEwMjkyMTQ2fQ.msXjKKRDeKdPDXKTuzn-WcCTmA_cWnRnq7XCuEePofE";
    const articleid = '5fc78d940f21f9001768dec1';
    // get all Articles
    it('should GET all Articles', (done) => {
        chai.request(app)
            .get('/api/v1/articles')
            .end((err, res) => {
                res.should.have.status(200);
                res.should.be.an('object');
                done();
            });
    });
    // get all article comment
    it('should GET all Article Comments', (done) => {
        chai.request(app)
            .get('/api/v1/articles/comments')
            .end((err, res) => {
                res.should.have.status(200);
                res.should.be.an('object');
                done();
            });
    });
// get one article
    it('should GET single article', (done) => {
        chai.request(app)
            .get('/api/v1/articles', articleid)
            .end((err, res) => {
                res.should.have.status(200);
                res.should.be.an('object');
                done();
            });
    });
    // update single article
    it('should update single article', (done) => {
        const updatearticle = '5fd78cf06741e4ab3294ee44';
        const artupdate = {
            title: 'update article 1',
            bodie: 'update article 1',
            conclusion: 'update artilce 1',
        };
        chai.request(app)
            .patch(`/api/v1/articles/${updatearticle}`)
            .set('Authorization', `Bearer ${token}`)
            .send(artupdate)
            .end((err, res) => {
                res.should.have.status(200);
                res.should.be.an('object');
                done();
            });
    });
     // if no data found to update on article
    //  it('should not update article',(done)=>{
    //     const artupdate={
    //         title:'update article 1',
    //         bodie:'update article 1',
    //         conclusion:'update artilce 1',
    //     }
    //     chai.request(app)
    //         .patch('/api/v1/articles/'+articleid)
    //         .set('Authorization',`Bearer ${token}`)
    //         .send(artupdate)
    //         .end((err,res)=>{
    //             res.should.have.status(404);
    //             res.should.be.an('object');
    //             done();
    //         })
    // })
    // wrong inputs
    it('should not update single article', (done) => {
        const artupdate = {
            title: 'update article 1',
            bodie: 'update article 1',
            conclusion: 'update artilce 1',
        };
        chai.request(app)
            .patch(`/api/v1/articles${articleid}`)
            .set('Authorization', `Bearer ${token}`)
            .send(artupdate)
            .end((err, res) => {
                res.should.have.status(404);
                res.should.be.an('object');
                done();
            });
    });
    // Delete article
     it('should delete single article', (done) => {
        const articleidd = '5fd78c05ec97e6aaf8117b6d';
        chai.request(app)
            .delete(`/api/v1/articles/${articleidd}`)
            .set('Authorization', `Bearer ${token}`)
            .end((err, res) => {
                res.should.have.status(200);
                res.should.be.an('object');
                done();
            });
    });
     // if no data found to Delete
     it('should not delete article if no data found', (done) => {
        const articleidd = '5fd78c05ec97e6aaf8117b6d';
        chai.request(app)
            .delete(`/api/v1/articles/${articleidd}`)
            .set('Authorization', `Bearer ${token}`)
            .end((err, res) => {
                res.should.have.status(404);
                res.should.be.an('object');
                done();
            });
    });

     // select one query with Authorization
    // it('should GET one Query', (done) => {
    //     const contactid = '5fc113745d309bd3a8fbe001';
    //     chai.request(app)
    //         .get(`/api/v1/contacts/${contactid}`)
    //         .set('Authorization', `Bearer ${token}`)
    //         .end((err, res) => {
    //             res.should.have.status(200);
    //             res.should.be.an('object');
    //             done();
    //         });
    //  });
     // select one query without Authorization
    // it('should not GET one Query', (done) => {
    //     const contactid = '5fc113745d309bd3a8fbe001';
    //     chai.request(app)
    //         .get(`/api/v1/contacts/${contactid}`)
    //         .end((err, res) => {
    //             res.should.have.status(401);
    //             res.should.be.an('object');
    //             done();
    //         });
    // });
//    should Post article for authorized user
    it("should POST new Article", (done) => {
        const article = {
          title: "post",
          bodie: "post with vscode",
          conclusion: "vscode testing from mocha posting",
        };
        chai
          .request(app)
          .post('/api/v1/articles/')
          .set('Authorization', `Bearer ${token}`)
          .send(article)
          .end((err, res) => {
            if (err) done(err);
                res.should.have.status(201);
                done();
          });
      });
      // Should Post comment on posted article
      it("should POST new Comment", (done) => {
          
        const comments = {
          email: "navy@gmail.com",
          commenty: "testing from mocha",
        };
        chai
          .request(app)
          .post('/api/v1/articles/comments', articleid)
          .set('Authorization', `Bearer ${token}`)
          .send(comments)
          .end((err, res) => {
            if (err) done(err);
                res.should.have.status(201);
                done();
          });
      });
      // Should Post comment on posted article with bad email format
      it("should not POST new Comment", (done) => {
          
        const comments = {
          email: "navy",
          commenty: "testing from mocha",
        };
        chai
          .request(app)
          .post('/api/v1/articles/comments', articleid)
          .set('Authorization', `Bearer ${token}`)
          .send(comments)
          .end((err, res) => {
            if (err) done(err);
                res.should.have.status(500);
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
    // //   it('should DELETE one Query',(done)=>{
    // //     const contactid='5fc374234c62240e4d5f1a0a';
    // //     chai.request(app)
    // //         .delete('/api/v1/contacts/'+contactid)
    // //         .set('Authorization',`Bearer ${token}`)
    // //         .end((err,res)=>{
    // //             res.should.have.status(200);
    // //             res.should.be.an('object');
    // //             done();
    // //         })
    // })
});
