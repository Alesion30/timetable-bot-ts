import express, { Express } from 'express';

/**
 * ミドルウェア 登録
 */
export const registMidleware = (app: Express) => {
  app.use(express.json());
  app.use(
    express.urlencoded({
      extended: true,
    })
  );
  return app;
};
