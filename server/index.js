import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import signupRoute from './routes/signup';
import contacts from './routes/contacts';
import articles from './routes/articles';
import swaggerJsDoc from "swagger-jsdoc";
import swaggerui from 'swagger-ui-express';
import swaggerdocument from './documentation/swagger';
const app=express();
const port=process.env.PORT||3000;
dotenv.config();
//database connection

mongoose
     .connect(process.env.uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })
     .then(() => console.log( 'Database Connected' ))
     .catch(err => console.log( err ));
     app.get('/', (req, res) => {
        res.status(200).json({
         message: "Welcome to MyBrand API"
        });
    });
     app.use(express.json());
     app.use("/api/v1/user", signupRoute);
     app.use("/api/v1/contacts", contacts);
     app.use("/api/v1/articles", articles);
     app.use("/uploads",express.static("uploads"));
     
     app.use('/api-documentation',swaggerui.serve,swaggerui.setup(swaggerdocument));
     
     app.use('/*', (_req, res) => {
        res.status(404).send({error: 'Not Found' });
      });
app.get('/home');
app.listen(port, () => {
    console.log(`localhost:${port}`);
});

export default app;