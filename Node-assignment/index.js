import express from 'express';
import { appRoutes } from './src/index.js';

const PORT = 4000;
const startServer = () => {
  const app = express();

  app.use('/', appRoutes());
  app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
  });
};

startServer();
