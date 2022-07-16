/**
 * 時分秒を秒に変換する
 */
export const convertTime = (hour: number, minute: number, second: number) => {
  return hour * 60 * 60 + minute * 60 + second;
};
