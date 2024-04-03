require('dotenv').config()

import 'dotenv/config';
import express from "express";
import api from './routes/api.routes';
import {swaggerDocs} from './config/swagger';

const app = express();

app.use(express.json());

app.get<Record<string, unknown>, { message: string }>('/', (_, res) => {
  res.json({
    message: 'All system are good! 👋🌎🚀',
  });
});

app.use('/api', api);

const PORT = process.env.PORT || '3000';

swaggerDocs(app, PORT);

export default app;
