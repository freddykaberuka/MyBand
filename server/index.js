import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
const app=express();
const port=process.env.port||3000;
dotenv.config();
//database connection

mongoose
     .connect(process.env.uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })
     .then(() => console.log( 'Database Connected' ))
     .catch(err => console.log( err ));


app.get('/home');
app.listen(port, () => {
    console.log(`localhost:${port}`);
});