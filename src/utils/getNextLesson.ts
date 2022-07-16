import spring1 from '../data/spring1.json';

import { getNextPeriod } from './getNextPeriod';

type DayKey = 'sunday' | 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday' | 'saturday';

/**
 * 時刻から次の授業データを取得する
 */
export const getNextLesson = (date: Date) => {
  const daykeys: DayKey[] = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
  const day = date.getDay(); // 曜日（0-6）
  const hour = date.getHours(); // 時
  const minute = date.getMinutes(); // 分
  const second = date.getSeconds(); // 秒

  const daykey = daykeys[day];

  // 日曜 または 土曜の時は null を返す
  if (daykey === 'sunday' || daykey === 'saturday') {
    return null;
  }

  // 曜日の授業データ
  const dayLessons = spring1[daykey];

  // 次の時限
  const nextPeriod = getNextPeriod(hour, minute, second);

  // 次の授業がない場合は null を返す
  if (nextPeriod === null) {
    return null;
  }

  // 次の授業データ
  const dayLesson = dayLessons[nextPeriod];

  return dayLesson;
};
