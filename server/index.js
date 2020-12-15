import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import signupRoute from './routes/signup';
import contacts from './routes/contacts';
import articles from './routes/articles';

const app = express();
const port = process.env.port || 3000;
dotenv.config();
// database connection

mongoose
  .connect('mongodb+srv://fred:abcd1234@cluster0.4vfqp.mongodb.net/capstone_project?retryWrites=true&w=majority', { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })
  // eslint-disable-next-line no-console
  .then(() => console.log('Database Connected'))
  .catch((err) => console.log(err));
app.use(express.json());
app.use('/api/v1/user', signupRoute);
app.use('/api/v1/contacts', contacts);
app.use('/api/v1/articles', articles);
app.use('/uploads', express.static('uploads'));
app.use('/*', (_req, res) => {
  res.status(404).send({ error: 'Not Found' });
});
app.get('/home');
app.listen(port, () => {
  console.log(`localhost:${port}`);
});

export default app;
