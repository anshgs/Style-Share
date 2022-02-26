import dotenv from 'dotenv';
import cors from 'cors';
import express from 'express';
import passport from 'passport';

import db from './models/index.js';
import routes from './routes/index.js';

dotenv.config();
const isProduction = process.env.NODE_ENV === 'production';

const { json, urlencoded } = express;
const { mongoose, uri } = db;

const app = express();

const corsOptions = {
  origin: '*',
};
app.use(cors(corsOptions));

app.use(json({ limit: '30mb', extended: true }));

app.use(urlencoded({ limit: '30mb', extended: true }));


app.use('/api', routes);

mongoose.connect(
  uri, 
  {
      useNewUrlParser: true,
      useUnifiedTopology: true
  }).then(() => {
    console.log('Connected to the database!');
  }).catch((err) => {
    console.log('Cannot connect to the database!', err);
    process.exit();
});


// set port, listen for requests
const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server is running on port ${PORT}.`));