import { convertTime } from './convertTime';

/**
 * 時分秒から次の時限を取得する
 */
export const getNextPeriod = (hour: number, minute: number, second: number) => {
  const time = convertTime(hour, minute, second);

  if (time < convertTime(8, 40, 0)) {
    // 1限
    return 1;
  } else if (time < convertTime(10, 30, 0)) {
    // 2限
    return 2;
  } else if (time < convertTime(13, 0, 0)) {
    // 3限
    return 3;
  } else if (time < convertTime(14, 50, 0)) {
    // 4限
    return 4;
  } else if (time < convertTime(16, 40, 0)) {
    // 5限
    return 5;
  } else {
    return null;
  }
};
