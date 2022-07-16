import { LINE_CHANNEL_ACCESS_TOKEN } from '../constants/env';
import axios from '../plugins/axios';

/**
 * メッセージを返信する
 *
 * @params text 返信メッセージ
 * @params replyToken リプライトークン
 */
export const replyMessage = async (text: string, replyToken: string) => {
  const message = {
    text: text,
    type: 'text',
  };

  // LINEサーバーに送るデータ
  const postData = {
    messages: [message],
    replyToken: replyToken,
  };

  // LINEサーバーにデータを送信
  await axios.post('https://api.line.me/v2/bot/message/reply', {
    body: JSON.stringify(postData),
    headers: {
      Authorization: `Bearer ${LINE_CHANNEL_ACCESS_TOKEN}`,
    },
  });
};
