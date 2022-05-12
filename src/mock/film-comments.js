import dayjs from 'dayjs';
import { nanoid } from 'nanoid';
import { generateDescription, getRandomName } from '../film-data.js';
import { getRandomNumberInRange, Emoji } from '../utils.js';

const MAX_COMMENT_DAYS = 730;
const MAX_COMMENT_MINUTES = 90;

const getEmoji = () => {
  const emojiNames = Object.keys(Emoji);
  return emojiNames[getRandomNumberInRange(0, emojiNames.length)];
};

const getCommentDate = () => {
  const flipCoin = getRandomNumberInRange(0, 1);
  if (flipCoin) {
    const oldDate = dayjs().subtract(getRandomNumberInRange(1, MAX_COMMENT_DAYS), 'day');
    return oldDate;
  }
  const todayDate = dayjs().subtract(getRandomNumberInRange(1, MAX_COMMENT_MINUTES), 'minute');
  return todayDate;
};

export const generateFilmComments = (someId) => ({
  filmId: someId,
  id: nanoid(10),
  author: getRandomName(),
  comment: generateDescription(),
  date: getCommentDate(),
  emotion: getEmoji()
});
