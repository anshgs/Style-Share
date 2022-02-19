import dotenv from 'dotenv';
import cors from 'cors';
import express from 'express';

import routes from './routes/index.js';

dotenv.config();

const app = express();

const corsOptions = {
  origin: '*'
};

app.use(cors(corsOptions));

app.use('/api', routes);

const PORT = process.env.PORT || 4000

app.listen(PORT, console.log(`Server is running on port ${PORT}.`));