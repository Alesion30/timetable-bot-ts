import { Express, Request, Response } from 'express';

import { getNextLesson } from './utils/getNextLesson';
import { replyMessage } from './utils/replyMessage';

/**
 * エンドポイント 登録
 */
export const registRoute = (app: Express) => {
  app.get('/', (_, res: Response) => {
    res.send('Hello World');
  });

  // LINE Webhook
  app.post('/webhook', async (req: Request, res: Response) => {
    const events = req?.body?.events;
    if (events.length > 0) {
      const messageText = events[0].message?.text;
      const replyToken = events[0].replyToken;

      if (messageText !== undefined) {
        if (messageText.indexOf('次') !== -1 && messageText.indexOf('授業') !== -1) {
          const now = new Date();
          const lesson = getNextLesson(now);
          if (lesson !== null) {
            await replyMessage(`次の授業は、${lesson.name}です`, replyToken);
          } else {
            await replyMessage('次の授業はありません', replyToken);
          }
        } else if (messageText.indexOf('次') !== -1 && messageText.indexOf('教室') !== -1) {
          const now = new Date();
          const lesson = getNextLesson(now);
          if (lesson !== null) {
            await replyMessage(`次の教室は、${lesson.place}です`, replyToken);
          } else {
            await replyMessage('次の授業はありません', replyToken);
          }
        } else {
          await replyMessage('すみません、よくわかりません', replyToken);
        }
      }
    }

    res.send('HTTP POST request sent to the webhook URL!');
  });

  return app;
};
