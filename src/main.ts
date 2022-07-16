import express, { Express } from 'express';

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

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(PORT, () => {
  console.log('Running at http://localhost:3000');
});
