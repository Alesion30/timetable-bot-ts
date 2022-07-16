import { Express } from 'express';

/**
 * エンドポイント 登録
 */
export const registRoute = (app: Express) => {
  app.get('/', (_, res) => {
    res.send('Hello World');
  });

  return app;
};
