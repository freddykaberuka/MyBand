import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import signupRoute from './routes/signup';
import contacts from './routes/contacts';
import articles from './routes/articles';
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
     app.use("/api/v1/contacts", contacts);
     app.use("/api/v1/articles", articles);
app.get('/home');
app.listen(port, () => {
    console.log(`localhost:${port}`);
});

export default app;