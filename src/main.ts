import express, { Express } from 'express';

import { PORT } from './constants/env';

const midleware = (app: Express) => {
  app.use(express.json());
  app.use(
    express.urlencoded({
      extended: true,
    })
  );
  return app;
};

const app = midleware(express());

app.get('/', (req, res) => {
  console.log(PORT);
  res.send('Hello World');
});

app.listen(PORT, () => {
  console.log(`Running at http://localhost:${PORT}`);
});
