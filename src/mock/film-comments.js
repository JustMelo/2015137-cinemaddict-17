import dayjs from 'dayjs';
import { generateDescription, getRandomName } from '../mock/film-data.js';
import { getRandomNumberInRange } from '../utils.js';

const MAX_COMMENT_DAYS = 730;
const MAX_COMMENT_MINUTES = 90;

export const Emoji = {
  smile: '/images/emoji/smile.png',
  sleeping: '/images/emoji/sleeping.png',
  angry: '/images/emoji/angry.png',
  puke: '/images/emoji/puke.png'
};

export const allComments = [];

const getEmoji = () => {
  const emojiNames = Object.keys(Emoji);
  return emojiNames[getRandomNumberInRange(0, emojiNames.length)];
};

const getCommentDate = () => {
  const daysSub = getRandomNumberInRange(0, MAX_COMMENT_DAYS);
  const minutesSub = getRandomNumberInRange(0, MAX_COMMENT_MINUTES);
  return dayjs(new Date()).subtract(daysSub, 'day').subtract(minutesSub, 'minute').toDate();
};

const getId = () => {
  const randomFilmKey = getRandomNumberInRange(0, Array.from(Object.keys(allComments)).length);
  return allComments[randomFilmKey];
};

export const generateFilmComments = () => (
  {
    id: getId(),
    author: getRandomName(),
    comment: generateDescription(),
    date: getCommentDate(),
    emotion: getEmoji()
  }
);
