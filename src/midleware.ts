import express, { Express } from 'express';

/**
 * ミドルウェア 登録
 */
export const resistMidleware = (app: Express) => {
  app.use(express.json());
  app.use(
    express.urlencoded({
      extended: true,
    })
  );
  return app;
};
