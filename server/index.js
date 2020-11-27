import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import signupRoute from './routes/signup';
const app=express();
const port=process.env.port||3000;
dotenv.config();
//database connection

mongoose
     .connect(process.env.uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })
     .then(() => console.log( 'Database Connected' ))
     .catch(err => console.log( err ));

     app.use(express.json());
     app.use("/api/v1/user", signupRoute);
app.get('/home');
app.listen(port, () => {
    console.log(`localhost:${port}`);
});